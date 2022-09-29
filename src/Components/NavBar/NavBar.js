import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_title'>Connect</div>
        <div className='navbar_navigation'>
          <a href='#how'><div className='navbar_navigation_element'>How?</div></a>
          <a href='#prices'><div className='navbar_navigation_element'>Prices</div></a>
          <a href='#download'><div className='navbar_navigation_element'>Download</div></a>
          <a href='#how'><div className='navbar_navigation_element'>Contact</div></a>
        </div>
        <div className='navbar_navigation_mobile'>
          <a href='#how'><div className='navbar_navigation_element_mobile questionMark'/></a>
          <a href='#prices'><div className='navbar_navigation_element_mobile prices' /></a>
          <a href='#download'><div className='navbar_navigation_element_mobile download' /></a>
          <a href='#how'><div className='navbar_navigation_element_mobile contact' /></a>
        </div>
      </div>
    </>
  )
}
