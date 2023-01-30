import React, { useEffect } from 'react'
import "./GetStarted.scss"

export default function GetStarted() {

  window.addEventListener('click', function (e) {
    if (!document.getElementById('navbarMm').contains(e.target)) {
      document.getElementById("checkBoxNavBar").checked = false;
    }
  });


  function isTouchDevice() {
    return (('ontouchstart' in window) ||
      (navigator.maxTouchPoints > 0) ||
      (navigator.msMaxTouchPoints > 0));
  }


  useEffect(() => {


    let viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    let cloud = document.querySelectorAll(".cloud")
    let bottom = document.querySelectorAll(".wrap-top")
    let header = document.querySelectorAll('.WrapperApp');


    let cloud2 = document.querySelectorAll(".cloud2")
    if (!isTouchDevice()) {

      const sub = header.forEach(function (element) {
        element.addEventListener("scroll", function () {

          let value = element.scrollTop

          if (viewportWidth > 768) {

            bottom.forEach((item) => {
              item.style.right = `-450px`

              item.style.translate = `${-value * 0.2}px 0`
            })

            cloud.forEach((item) => {
              item.style.cssText = `translate: ${-value}px 0 ; scale: ${1 + value / 2000}`
            })

            cloud2.forEach((item) => {
              item.style.cssText = `translate: ${value}px 0; scale: ${1 + value / 2000}`
            })
          }
        })
      })
      return sub
    }
  })










  return (
    <>
      <div className='getStarted section' id='start'>
        <div style={{ position: "absolute", top: "0" }} id="top"></div>

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
