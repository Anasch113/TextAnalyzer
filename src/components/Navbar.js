import React from "react";
import PropTypes from 'prop-types'
import "./Navbar.css"


export default function Navbar(props) {
  
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-a" to="/FindReplace">
               Find & Replace
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-a" to="/about">
                 {props.aboutText}
                </a>
              </li> */}

              
            </ul>
            
          </div>
        </div>
        <div className="form-check form-switch">
  <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmLFor="flexSwitchCheckDefault">DarkMode</label>
</div>
      </nav>
      
    </div>
  );
}

Navbar.prototype={ title: PropTypes.string,
  aboutText: PropTypes.string }

  Navbar.defaultProps={
    
    aboutText: "About"
  };