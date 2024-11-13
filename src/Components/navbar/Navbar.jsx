import React from 'react'
import { AiOutlineSpotify } from "react-icons/ai";
import { GoHome } from "react-icons/go";
import "./navbar.css"
import { FiSearch } from "react-icons/fi";
import { FaFirefoxBrowser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='nav'>
        <AiOutlineSpotify className='navicon'/>
        </div>
        <div className="navbar__search">
       <span><GoHome className='icon' /></span> 
     <div className='search'>
     <FiSearch  className='navicon1' />

     <input type="text" placeholder="What do you want to play ?" />
     <FaFirefoxBrowser className='navicon'/>
     </div>
      </div>
      <div className="navbar__buton">
      <button className="login-button">Log In</button>
      <button className="signup-button">Sign Up</button>
      </div>
     
    </div>
    
    <div className='media-nav'>
          <button className='all'>All</button>
          <button className='music'>Music</button>
          <button className='podcast'>Podcasts</button>


      </div>
    </>
  )
}

export default Navbar