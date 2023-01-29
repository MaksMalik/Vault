import React, { useEffect, useState } from 'react'
import "./NavBar.scss"

export default function NavBar() {

  window.addEventListener('click', function (e) {
    if (!document.getElementById('navbarMm').contains(e.target)) {
      document.getElementById("checkBoxNavBar").checked = false;
    }
  });


  const [currentPage, setCurrentPage] = useState("start")
  const sections = document.querySelectorAll(".section")
  const links = document.querySelectorAll(".link")
  const ref = React.useRef()
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
  }, [ref, currentPage, links, sections])


  return (
    <>
      <nav className="navbarM" id='navbarMm'>
        <div className="navbar-container container navbar_navigation">
          <input type="checkbox" name="" id="checkBoxNavBar"></input>
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li>
              <a className="link active navbar_navigation_element" href='#start'>Start</a>
            </li>
            <li>
              <a className="link navbar_navigation_element" href='#how'>How?</a>
            </li>
            <li>
              <a className="link navbar_navigation_element" href='#prices'>Prices</a>
            </li>
            <li>
              <a className="link navbar_navigation_element" href='#download'>Download</a>
            </li>
            <li>
              <a className="link navbar_navigation_element" href='#contact'>Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}
