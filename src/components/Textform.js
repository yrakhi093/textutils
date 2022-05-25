import React, {useState} from "react";

export default function Textform(props) {

    const [text, setText] = useState("");
    // setText = ()=>{
    //     console.log("changed")
    // }
    const clickUpCase = ()=>{
        // console.log("clicked")
        setText(text.toUpperCase())
        props.showAlert("success!", "Your text is written in upper case")
        document.title = "best - UpperCase tool"
        setTimeout(() => {
          document.title = "best - UpperCase quick tool"
        }, 1000);
        setTimeout(() => {
          document.title = "best - UpperCase delay tool"
        }, 1500);
      }
    const clickLoCase = ()=>{
        // console.log("clicked")
        setText(text.toLowerCase())
        props.showAlert("success!", "Your text is written in lower case")

    }

    const conChangehandle = (event)=>{
        // console.log("handle")
        setText(event.target.value)
    }

    const removeSpclChar = ()=>{
        
        setText(text.replace(/[^a-zA-Z0-9" "]/g, ""))
        props.showAlert("success!", "Special Character has been removed.")
    }

    const clearText = ()=>{
        
        setText("")
        props.showAlert("success!", "Your text has been cleared")
        
    }

    const copyText = ()=>{
      var txt = document.getElementById('exampleFormControlTextarea1');
      txt.select();
      navigator.clipboard.writeText(txt.value);
      props.showAlert("success!", "Your text has been copied")
    }

    


  return (

    <>
    <div className="container my-3" style={{color: props.mode === 'light'?'black':'white'}}>
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1" value={text} onChange={conChangehandle}
          rows="8" style={{backgroundColor: props.mode === 'dark'?'#a1a1a1':'white', color: props.mode === 'dark'?'white':'black'}} 
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={clickUpCase}>Click to Captialize</button>
      <button className="btn btn-primary mx-2" onClick={clickLoCase}>Click to get Small letter</button>
      <button className="btn btn-primary mx-2" onClick={removeSpclChar}>Remove Special Char</button>
      <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={copyText}>Copy Text</button>

      <div className={`container my-5 text-${props.mode === 'light'?'black':'white'}` }>
          <h4>Here no. of words and character will reflect</h4>
          <p>{text.split(" ").length} words {text.length} character</p>
          <p>reading time for words would be {0.08 * text.split(" ").length} </p>

      </div>
    </div>

    </>
    
  );
}
