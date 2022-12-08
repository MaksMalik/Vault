import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_title'>Connect</div>
        <div className='navbar_navigation PC'>
          <a href='#how'><div className='navbar_navigation_element'>How?</div></a>
          <a href='#prices'><div className='navbar_navigation_element'>Prices</div></a>
          <a href='#download'><div className='navbar_navigation_element'>Download</div></a>
          <a href='#contact'><div className='navbar_navigation_element'>Contact</div></a>
        </div>

        <nav className="navbarM" id='navbarMm'>
          <div className="navbar-container container navbar_navigation">
            <input type="checkbox" name="" id="checkBoxNavBar"></input>
            <div className="hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <ul className="menu-items">
              <li>
                <a className="link navbar_navigation_element" href='#Start'>Start</a>
              </li>
              <li>
                <a className="link navbar_navigation_element" href='#how'>How?</a>
              </li>
              <li>
                <a className="link navbar_navigation_element" href='#prices'>Prices</a>
              </li>
              <li>
                <a className="link navbar_navigation_element" href='#download'>Download</a>
              </li>
              <li>
                <a className="link navbar_navigation_element" href='#contact'>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}
