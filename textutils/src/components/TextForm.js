import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = ()=>{
      // console.log("Uppercase was Clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
  }

    const handleOnChange = (event)=>{
        //console.log("on change");
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    //setText('new value');
  return (
    <>
        <div className="container">           
           <h3>{ props.heading }</h3>
            <textarea
            className="form-control" value={text} onChange={ handleOnChange }
            id="exampleFormControlTextarea1"
            rows="8"
            ></textarea>
            <button className="btn btn-primary my-3 mx-2 " onClick={
               handleUpClick 
            }>Convert To Uppercase</button>
            <button className="btn btn-primary my-3 mx-2" onClick={
               handleLoClick 
            }>Convert To Lowercase</button>
        </div>
        <div className='container my-3'>
          <h2>Your text Summary</h2>
          <p>{text.split(' ').length} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
    </>
  );
}
