import React from 'react'
import "./NavBar.scss"

export default function NavBarPC() {




  return (
    <>
      <div className='navbar' id='navbar'>
        <div className='navbar_title'>Vault</div>
        <div className='navbar_navigation PC'>
          <a href='#how'><div className='navbar_navigation_element'>How?</div></a>
          <a href='#prices'><div className='navbar_navigation_element'>Prices</div></a>
          <a href='#contact'><div className='navbar_navigation_element'>Contact</div></a>
          <a href='#download'><div className='navbar_navigation_element'>Download</div></a>
        </div>
      </div>
    </>
  )
}
