import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
    <>
      <div className='navbar'>
        <div className='navbar_title'>Connect</div>
        <div className='navbar_navigation'>
          <div className='navbar_navigation_element'>How?</div>
          <div className='navbar_navigation_element'>Prices</div>
          <div className='navbar_navigation_element'>Download</div>
          <div className='navbar_navigation_element'>Contact</div>
        </div>
        <div className='navbar_navigation_mobile'>
          <div className='navbar_navigation_element_mobile questionMark'/>
          <div className='navbar_navigation_element_mobile prices'/>
          <div className='navbar_navigation_element_mobile download'/>
          <div className='navbar_navigation_element_mobile contact'/>
        </div>
      </div>
    </>
  )
}
