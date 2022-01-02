
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route} from "react-router-dom";

export default class App extends Component {
  pageSize=6;

  setProgress=(a)=>{
    this.setState({
      progress:a
    })
  }

  state={
    progress:0
  }

    hai ="vignesh";
    apikey = process.env.REACT_APP_NEWS_API;
    // apikey="boom"
  render() {
    return (
      <>
      <Navbar/>

    

    

      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
      />

     


      <Routes>
      <Route exact  path="/" element={<News  api_key={this.apikey} setProgress={this.setProgress} key="home" pageSize={this.pageSize}/>} />
      <Route exact  path="/entertainment" element={<News api_key={this.apikey} setProgress={this.setProgress}key="entertainment" pageSize={this.pageSize} category="entertainment" />}/>
      <Route exact  path="/general" element={<News api_key={this.apikey} setProgress={this.setProgress}key="general" pageSize={this.pageSize} category="general" />}/>
      <Route exact  path="/health" element={<News api_key={this.apikey} setProgress={this.setProgress}key="health" pageSize={this.pageSize} category="health" />}/>
      <Route exact  path="/science" element={<News api_key={this.apikey} setProgress={this.setProgress}key="science" pageSize={this.pageSize} category="science" />}/>
      <Route exact  path="/sports" element={<News api_key={this.apikey} setProgress={this.setProgress}key="sports" pageSize={this.pageSize} category="sports" />}/>
      <Route exact  path="/technology" element={<News api_key={this.apikey} setProgress={this.setProgress}key="technology" pageSize={this.pageSize} category="technology" />}/>
      </Routes>

      </>
    )
  }
}







