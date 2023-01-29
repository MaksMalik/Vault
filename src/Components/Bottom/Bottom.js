import React from 'react'
import "./Bottom.scss"

export default function Bottom() {
  return (
    <>
        <div className='bottom section' id="bottom">
          <div className='wrap'>
          
            <div className='wrap-top'>
              <div className='bottom_title-top'>Proin nec ante eros. </div>
              <div className='bottom_title'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nam accumsan sem ut accumsan commodo. <br /> Et harum quidem rerum facilis est et expedita distinctio. </div>
            </div>

            <div className='wrap-bottom'>
              <div className='wrap-bottom-buttons'>
                <div className='googlePlay'></div>
                <div className='appleStore'></div>
              </div>
              <div>
                <a href='#navbar' className='arrowUp'><i className="fa-solid fa-arrow-up"></i></a>
              </div>
              <div className='wrap-bottom-rights'>
                © 2023 Vault. All Rights Reserved.
              </div>
            </div>

          </div>
        </div>
    </>
  )
}
