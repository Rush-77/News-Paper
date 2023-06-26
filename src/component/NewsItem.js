import React from 'react'

const NewsItem = (props) => {

    return (
      <div>
            <div className="card m-2" >
              <div className="d-flex justify-content-end position-absolute ">
                <span className="badge rounded-pill bg-danger p-1 text-white" >{props.source.name} </span>
              </div>
              
                <img src={props.urlToImage?props.urlToImage:"https://www.aljazeera.com/wp-content/uploads/2023/06/33J2436-highres-1687063190.jpg?resize=1920%2C1440"} className="card-img-top" 
                alt="Resource not Found..!!"/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className='card-text'> <small className='text-muted'>Published by {props.author?props.author:'Unknown'} on {props.publishedAt}</small></p>
                    <a href={props.url} target='_blank' rel="noopener noreferrer" className="btn btn-sm btn-dark">Read more...</a>
                </div>
            </div>
      </div>
    )

}

export default NewsItem
