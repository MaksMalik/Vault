import React, { useEffect } from 'react'
import "./GetStarted.scss"

export default function GetStarted() {

  window.addEventListener('click', function (e) {
    if (!document.getElementById('navbarMm').contains(e.target)) {
      document.getElementById("checkBoxNavBar").checked = false;
    }
  });





  useEffect(() => {
    const sub = window.addEventListener('scroll', function () {

      let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      let cloud = document.querySelectorAll(".cloud")
      let getStarted = document.querySelectorAll(".getStarted")

      let cloud2 = document.querySelectorAll(".cloud2")

      let value = window.scrollY
      if (viewportWidth > 768) {


        cloud.forEach((item) => {
          item.style.cssText = `translate: ${-value}px 0 ; scale: ${1 + value / 2000}`
        })

        cloud2.forEach((item) => {
          item.style.cssText = `translate: ${value}px 0; scale: ${1 + value / 2000}`
        })
        
        getStarted.forEach((item) => {
          item.style.translate = `0 ${value * 0.5}px`
        })
      }

    }) 
    return sub
  })










  return (
    <>
      <div className='getStarted section' id='start'>
        <div className='getStarted-wrap'>
          <div className='cloud'></div>
          <div className='cloud2'></div>

          <div className='getStarted_title'>Store and secure you data</div>
          <div className='getStarted_subTitle1'>Secure Document & Data Storage</div>
          <a href='#how'>
            <button href="#how" className='getStarted_button'>Get Started</button>
          </a>

          <div className='getStarted_subTitle2'>2GB FOR FREE</div>
        </div>
      </div>

    </>
  )
}
