import React from 'react'
import "./HowItWorks.scss"

export default function HowItWorks() {
  return (
    <>
      <div className='HowItWorks section' id="how">
        <div className='howWrap'>
          <div className='HowItWorks_title-top'> Nunc elementum metus in facilisis</div>
          <div className='HowItWorks_title'>
            Nullam varius pretium dolor eget ultrices. <br />
            Cras convallis feugiat accumsan. <br />
            Donec placerat odio sed tincidunt vehicula. <br />
            </div>


            <div className="mainPageWhyUs-statistics-box">
              <div className="mainPageWhyUs-statistics ">
                <div className="mainPageWhyUs-statistics-time hiddenWhyUs">
                  <i className="fa-solid fa-truck-fast icons"></i>
                  <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className="mainPageWhyUs-statistics-perDay hiddenWhyUs">
                  <i className="fa-solid fa-cubes icons"></i>
                  <p>Over 15.000.000 packages total</p>
                </div>
              </div>
              <div className="mainPageWhyUs-statistics">
              </div>
            </div>
          </div>
      </div>
    </>
  )
}