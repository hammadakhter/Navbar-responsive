import "./navbar.css"
import React from 'react'

function Navbar() {
 
  return (
    <div className='container'>
        <nav>
          <input type="checkbox" id="check"/>
          <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
          </label>
          <label className="logo">portfolio</label>
          <ul>
            <li><a className="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </nav>
    </div>
  )
}

export default Navbar