import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was Clicked");
        setText("you have clicked on handUpClick")
    }
    const handleOnChange = ()=>{
        console.log("on change");
    }
    const [text, setText] = useState('Enter the text');
    //setText('new value');
  return (
    <>
        <div class="mb-3">

           
           <h3>{ props.heading }</h3>
            <textarea
            className="form-control" value={text} onChange={ handleOnChange }
            id="exampleFormControlTextarea1"
            rows="8"
            ></textarea>
            <button className="btn btn-primary my-3" onClick={
               handleUpClick 
            }>Convert To Uppercase</button>
        </div>
    </>
  );
}
