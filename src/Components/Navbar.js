import "./navbar.css"
import React, { useState } from 'react';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className='container'>
    <nav>
      <input
        type="checkbox"
        id="check"
        checked={isMenuOpen}
        onChange={handleMenuToggle}
        onClick={handleMenuToggle}
      />
      <label htmlFor="check" className="checkbtn" >
        <i className="fas fa-bars"></i>
      </label>
      <label className="logo">portfolio</label>
      <ul className={isMenuOpen ? 'active' : ''}>
        <li><a href="#" onClick={handleMenuItemClick}>Home</a></li>
        <li><a href="#" onClick={handleMenuItemClick}>About</a></li>
        <li><a href="#" onClick={handleMenuItemClick}>Services</a></li>
        <li><a href="#" onClick={handleMenuItemClick}>Contact</a></li>
        <li><a href="#" onClick={handleMenuItemClick}>Feedback</a></li>
      </ul>
    </nav>
  </div>
  )
}

export default Navbar