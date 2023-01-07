import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import Fire from "./components/Fire";
import React from "react";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";
import Copyright from "./components/Copyright";


function App(props) {
  const [mode, setMode] = useState("light");
  const toogleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#000b12";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };
  return (
    <>
   
      <Navbar title="Text Analyzer" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container">
          
            {/* <Route path="/about" element={<About mode={mode} />}>
            </Route>
            <Route path="/FindReplace" element={<Fire mode={mode} />}>
            </Route> */}
            
             <TextForm heading="Enter text to analyze"  mode={mode} showAlert={showAlert} />
           
          
          
        </div>
  
   <Copyright mode={mode}/>

    </>
  );
}

export default App;
