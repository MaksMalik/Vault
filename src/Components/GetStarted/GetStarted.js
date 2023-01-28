import React from 'react'
import "./GetStarted.scss"

export default function GetStarted() {

  window.addEventListener('click', function (e) {
    if (!document.getElementById('navbarMm').contains(e.target)) {
      document.getElementById("checkBoxNavBar").checked = false;
    }
  });



  
  
  
  window.addEventListener('scroll', function () {
    
    let cloud = document.querySelectorAll(".cloud")
    let getStarted = document.querySelectorAll(".getStarted")

    let cloud2 = document.querySelectorAll(".cloud2")

    let value = window.scrollY
    cloud.forEach((item) => {
      item.style.translate = `${-value * 0.5}px 0`
      item.style.cssText = `translate: ${-value}px 0 ; scale: ${1 + value / 1000}`
    })

    cloud2.forEach((item) => {
      item.style.translate = `${value * 0.5}px 0`
      item.style.cssText = `translate: ${value}px 0; scale: ${1 + value / 1000}`
    })

    getStarted.forEach((item) => {
      item.style.translate = `0 ${value * 0.5}px`
    })
  })








  return (
    <>
      <div className='getStarted section' id='start'>
        <div className='getStarted-wrap'>
          <div className='cloud'></div>
          <div className='cloud2'></div>

          <div className='getStarted_title'>Secure yourself</div>
          <div className='getStarted_subTitle1'>VPN that you can trust</div>
          <a href='#how'>
            <button href="#how" className='getStarted_button'>Get Started</button>
          </a>

          <div className='getStarted_subTitle2'>30 days free premium trial</div>
        </div>
      </div>

    </>
  )
}
