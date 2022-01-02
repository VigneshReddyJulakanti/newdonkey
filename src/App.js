
import './App.css';
import LoadingBar from 'react-top-loading-bar'

import React ,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { Routes, Route} from "react-router-dom";

const App =()=> {
  const pageSize=6;

  const [Progress, setProgress] = useState(0)

    const hai ="vignesh";
    const apikey = process.env.REACT_APP_NEWS_API2;
    

    return (
      <>
      <Navbar/>

    

    

      <LoadingBar
        color='#f11946'
        Progress={Progress}
        
      />

     


      <Routes>
      <Route exact  path="/" element={<News  api_key={apikey} setProgress={setProgress} key="home" pageSize={pageSize}/>} />
      <Route exact  path="/entertainment" element={<News api_key={apikey} setProgress={setProgress}key="entertainment" pageSize={pageSize} category="entertainment" />}/>
      <Route exact  path="/general" element={<News api_key={apikey} setProgress={setProgress}key="general" pageSize={pageSize} category="general" />}/>
      <Route exact  path="/health" element={<News api_key={apikey} setProgress={setProgress}key="health" pageSize={pageSize} category="health" />}/>
      <Route exact  path="/science" element={<News api_key={apikey} setProgress={setProgress}key="science" pageSize={pageSize} category="science" />}/>
      <Route exact  path="/sports" element={<News api_key={apikey} setProgress={setProgress}key="sports" pageSize={pageSize} category="sports" />}/>
      <Route exact  path="/technology" element={<News api_key={apikey} setProgress={setProgress}key="technology" pageSize={pageSize} category="technology" />}/>
      </Routes>

      </>
    )
  
}
export default App






