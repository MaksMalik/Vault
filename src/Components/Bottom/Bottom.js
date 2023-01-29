import React from 'react'
import "./Bottom.scss"

export default function Bottom() {
  return (
    <>
        <div className='bottom section' id="prices">
          <div className='wrap'>

            <div className='wrap-top'>
              <div className='googlePlay'></div>
              <div className='appleStore'></div>
            </div>

            <div className='wrap-bottom'>
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
