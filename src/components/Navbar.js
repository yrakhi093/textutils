import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <a className="navbar-brand" href="/"><b>{props.title}</b></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.abouttext}</a>
        </li> */}
        
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
      </form>
      <div className={`form-check form-switch mx-4 text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label"  htmlFor="flexSwitchCheckDefault"><b>Enable Modes</b></label>
</div>
    </div>
  </nav>
  )
}
// Navbar.prototype = {
//     title: PropTypes.string,
//     abouttext: PropTypes.string
// }

// Navbar.defaultProps = {
//     title:"TextChexk",
//     abouttext:"thisText"

// }
