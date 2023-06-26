import './App.css';

import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import Footer from './component/Footer';
import {
  BrowserRouter ,
  Route,
  Routes
} from "react-router-dom";
import About from './component/About';
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
  
  const pageSize = 9;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const country = 'in';

  const [progress,setProgress] = useState(0);

    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar color='#f11946' progress={progress} />
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress}  key='general' pageSize={pageSize} apiKey={apiKey} country={country} category='general'/>}></Route>
            <Route exact path='business' element={<News setProgress={setProgress}  key='business' pageSize={pageSize} apiKey={apiKey} country={country} category='business'/>}></Route>
            <Route exact path='entertainment' element={<News setProgress={setProgress}  key='entertainment' pageSize={pageSize} apiKey={apiKey} country={country} category='entertainment'/>}></Route>
            <Route exact path='health' element={<News setProgress={setProgress}  key='health' pageSize={pageSize} apiKey={apiKey} country={country} category='health'/>}></Route>
            <Route exact path='science' element={<News setProgress={setProgress}  key='science' pageSize={pageSize} apiKey={apiKey} country={country} category='science'/>}></Route>
            <Route exact path='sports' element={<News setProgress={setProgress}  key='sports' pageSize={pageSize} apiKey={apiKey} country={country} category='sports'/>}></Route>
            <Route exact path='technology' element={<News setProgress={setProgress}  key='technology' pageSize={pageSize} apiKey={apiKey} country={country} category='technology'/>}></Route>
            <Route exact path='about' element={<About/>}></Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
    )
}

export default App;