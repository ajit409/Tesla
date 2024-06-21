import React, { useState } from 'react';
import { Link as ScrollLink } from "react-scroll";
import "./Header.css"

function Header() {
  const [navBar, setNavBar] = useState(false);

  return (
    <>
      <nav>
        <img src='/images/logo.svg' alt='tesla' />
        <div className='mainMenu'>
          <ScrollLink to="model-3" smooth={true}>
            <a href='#'>Model 3</a>
          </ScrollLink>

          <ScrollLink to="model-s" smooth={true}>
            <a href='#'>Model S</a>
          </ScrollLink>

          <ScrollLink to="model-x" smooth={true}>
            <a href='#'>Model X</a>
            
          </ScrollLink>

          <ScrollLink to="model-y" smooth={true}>
            <a href='#'>Model Y</a>
          </ScrollLink>

          <ScrollLink to="roof" smooth={true}> 
            <a href='#'>Solar Roof</a>
          </ScrollLink>

          <ScrollLink to="panel" smooth={true}>
            <a href='#'>Solar Panels</a>
          </ScrollLink>

        </div>

        <div className='rightMenu'>
          <div className='rightTwo'>
            <a href='#'>Shop</a>
            <a href='#'>Account</a>
          </div>
          <a onClick={() => setNavBar(true)}>Menu</a>
        </div>

        {navBar &&
          <div data-aos="fade-left" className='mobileMenu'>
            <div className='closeButton' onClick={() => setNavBar(false)}>X</div>
            <a href='#'>Model S</a>
            <a href='#'>Model 3</a>
            <a href='#'>Model X</a>
            <a href='#'>Model Y</a>
            <a href='#'>Soalar Roof</a>
            <a href='#'>Soalar Panels</a>
            <a href='#'>Used Inventory</a>
            <a href='#'>Existing Inventory</a>
            <a href='#'>Tradind </a>
            <a href='#'>Test Drive</a>
          </div>
        }
      </nav>
    </>
  );
}

export default Header;