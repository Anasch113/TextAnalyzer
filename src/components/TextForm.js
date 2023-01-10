import React, {useState} from 'react'
import "./TextForm.css"

export default function TextForm(props) {
  const helloClick = ()=>{
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase", "success")
  }
  const helloChange =(event)=>{
    // console.log("On change ")
    setText(event.target.value)
  }
  const helloClickLower= ()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase", "success")
  }
  const helloClickFont= ()=>{
    let newText = "";
    setText(newText)
    props.showAlert("Text Cleared", "success")
  }
  const [text, setText] =useState( '')
  
  
  const handleCopy=()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text has been copied to clipboard", "success")
  }
  

  const handleExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success")
  }
  const [fWord, findWord] = useState("");
const [rWord, replaceWord] = useState("");
//Functions used to find and replace
const handlefindChange = (event) => {
  findWord(event.target.value);
};
const handleReplaceChange = (event) => {
console.log(replaceWord(event.target.value)) ;
};
const handleReplaceClick = () => {
  let newText = text.replaceAll(fWord,rWord);
  setText(newText);
  props.showAlert("Text has been replaced", "success")
};

 
  return (
    <div className="main" >

    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <>
      <h1>{props.heading} </h1> 
<div className="mb-3">
  
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}} value={text} onChange={helloChange}  id="myBox" rows="8"></textarea>
</div>

<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={helloClick}>
    Convert to UpperCase
</button>
<button disabled={text.length===0} className="btn btn-primary mx-3 my-3" onClick={helloClickLower}>
    Convert to LowerCase
</button>
<button disabled={text.length===0}  className="btn btn-primary mx-3 my-3" onClick={helloClickFont}>

    Clear
</button>

<button disabled={text.length===0}  type="button" className="btn btn-primary mx-3 my-3"  onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0}  type="button" className="btn btn-primary mx-3 my-3"  onClick={handleExtraSpaces}>Remove Extra Spaces</button>
<div className="container2 my-3">
  <h2 className='heading-text' >Analyzer</h2>
  <p > Number of words: {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
  <p>Number of chracters: {text.length}</p>
  <p id='time-text'> Time to read :{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes </p>

  
</div>

<div className="mb-3" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}}>


  <label for="exampleFormControlTextarea1" className="form-label"><h3>Enter the text below that needs to be replaced:-</h3></label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}} value={fWord} onChange={handlefindChange} id="exampleFormControlTextarea1" rows="3"></textarea>
</div>


<div className="mb-3"style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}}>
  <label  for="exampleFormControlTextarea1" className="form-label"><h3>Enter the text that you want to add:-</h3> </label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}}value={rWord} onChange={handleReplaceChange} id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button"disabled={text.length===0} className="btn btn-primary my-3"  onClick = {handleReplaceClick}>Replace</button>
</div>
<div className="container3" style={{backgroundColor:props.mode==='dark'?'#000b12':'white'}}>
  <h2>Preview</h2>
  <p>{text.length>0?text:"Nothins to preview!"} </p>
</div>
<div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>What is Text Analyzer?</strong>
      
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion">
   <strong>
   Text Analyzer is the utility which is used to analyze the text for daily purposes.
  It is design to help the people who deals with the text on daily routine.
   </strong>
  You can count your words and chracters.Extra spaces can also be remove from the text.It also tells the time to read the text. You can also convert the whole text into upper case or lower case.You can also preview your text in preview box.Text Analyzer also provides the facility of find and replace in which you can replace any specfic words,chracters,symbols or sentences with the text you want.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}}type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
     <strong>  Friendly Environment & Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
    We have provided a special feature of dark mode in which user can switch between light and dark environment.All these features are free to use so that anyone can take benefit from it.
      </div>
    </div>
  </div>
  <div className="accordion-item"style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed"style={{backgroundColor:props.mode==='dark'?'#000b12':'white',color:props.mode==='dark'?'white':'black'}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       <strong>Latest Frameworks</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      Framework is the most important thing on which a web app based.
      Text Analyzer is  based on <strong>React JS</strong> which is the most efficient and latest framework across the world. It is a <strong> Single page application</strong> which does not need to reload when user send request to server.
      </div>
    </div>
  </div>
</div>
      </>
    </div>

    </div>

  )
};
