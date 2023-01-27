import React, { useEffect, useState } from 'react'
import "./GetStarted.scss"

export default function GetStarted() {

  window.addEventListener('click', function (e) {
    if (!document.getElementById('navbarMm').contains(e.target)) {
      document.getElementById("checkBoxNavBar").checked = false;
    }
  });


  const [currentPage, setCurrentPage] = useState("start")
  const sections = document.querySelectorAll(".section")
  const links = document.querySelectorAll(".link")
  useEffect(() => {
    window.onscroll = function () {
      sections.forEach((section) => {
        let sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          setCurrentPage(section.getAttribute("id"))
        }
      })

      links.forEach((item) => {
        item.style.cssText = "color: white"
        if (item.href.includes(currentPage)) {
          item.style.cssText = "color: white";
          item.classList.remove("active")
        }
        else {
          item.style = "color: black"
        }
      })
    }
  })
  return (
    <>
      <div className='getStarted section' id='start'>
        <div className='getStarted-wrap'>
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
