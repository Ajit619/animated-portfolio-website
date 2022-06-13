import React from 'react'
import '../css/navbar.css'

const Navbar = () => {
  return (
    <>
         <nav className='navbar' data-aos="fade-down" data-aos-delay="100">
          <div className="logo">
            <span>Coding Alt</span>
          </div>
          <div className='nav-items'>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
              <li>
                <span></span>
              </li>
            </ul>
          </div>
          <div className="right">
            <a href="#" >
            <button className="btn download">Download</button>
            </a>
          </div>
        </nav>
    </>
  )
}

export default Navbar