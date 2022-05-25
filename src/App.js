
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {

const[mode, setMode]=useState("light");
const[alert, setAlert] =useState(null)
const showAlert = (type, message)=>{
  setAlert({
    type:type,
    msg:message
  })
  setTimeout(() => {
    setAlert(null)
  }, 1500);
}

const toggleMode = ()=>{

  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#446aa3';
    showAlert("success" ,"Dark Mode has been enabled");
    // document.title = "Dark Mood Enabled"
    // setInterval(() => {
    //   document.title = "Quick Dark Mood"
      
    // }, 1000);
    
    // setInterval(() => {
    //   document.title = "Delay Dark Mood"
      
    // }, 2000);
    // THE ABOVE COMMENTED CODE is written for setting the time interval and show message after a regular interval in document title
   
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Success" ,"Light Mode has been enabled");
  }
}
  
  return (
    <>
    
    {/* <Router> */}
    <Navbar title="Textutils" abouttext="About Us"  mode={mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
    <Textform heading = "TextUtils" mode={mode}  showAlert={showAlert}/>
    {/* <Routes> */}
          {/* // <Route exact path="/about" element= {<About/>} /> */}
          {/* // <Route exact path="/" */}
          {/* //  element = {<Textform heading = "TextUtils" mode={mode}  showAlert={showAlert}/>} */}
        
          
    {/* </Routes> */}

    {/* </Router> */}
    </>
  );
}

export default App;
