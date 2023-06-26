import React, { useState,useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const [articles,setArticles] = useState([]);
  // eslint-disable-next-line
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalResults,setTotalResults] = useState(0);
  const [length,setLength] = useState(9);
  const [scroll,setScroll] = useState(true);

  const updatePage = async() =>{
    console.log('inside updatePage' + page);
    props.setProgress(10);
    let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;
    let data = await fetch(newsApiUrl);
    props.setProgress(70);
    let parseData = await data.json();
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }

  useEffect(() => {
    updatePage();
    // eslint-disable-next-line
  }, []);
  
  // const nextBtnClick = async() => {
  //   setPage(page + 1);
  //   updatePage();
  // }
  
  // const prevBtnClick= async() =>{
  //   setPage(page - 1);
  //   updatePage();
  // }

  const fetchData = async() =>{
    let newsApiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&page=${page+1}&pageSize=${props.pageSize}&apiKey=${props.apiKey}`;
    setPage(page + 1);
    console.log('inside fetchdata'+ page);
    console.log('fetchData url '+ newsApiUrl );
    let data = await fetch(newsApiUrl);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLength(length + props.pageSize);
    console.log('inside fetchdata'+ length);
    if(length >= totalResults){
      setScroll(false);
    }
    
  }

    return (
      <>
        <h1 className='text-center text-capitalize' style={{'marginTop':'70px'}}>Today's {props.category} News</h1>
        {/* {loading && <Spinner/>} */}
        <InfiniteScroll
          dataLength={length } //This is important field to render the next data
          next={fetchData}
          hasMore={scroll}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }>
          <div className="container">
            <div className="row" >
              { articles.map((ele)=>{
                return <div className="col-md-4" key={ele.url}>
                        <NewsItem  className='col-md-4' title={ele.title} source={ele.source} description={ele.description} url={ele.url} urlToImage={ele.urlToImage} publishedAt={new Date(ele.publishedAt).toUTCString()} author={ele.author} />
                      </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between my-2">
          <button type="button" className="btn btn-dark" disabled={this.state.page<= 1} onClick={this.prevBtnClick}>Previous</button>
          <button type="button" className="btn btn-dark" disabled={this.state.page >= Math.ceil(this.state.totalResults/this.props.pageSize)} onClick={this.nextBtnClick}>Next</button>
        </div> */}
      </>
    )
}

News.defaultProps = {
  country: 'in',
  category: 'general',
  pageSize: 9
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string
}

export default News
