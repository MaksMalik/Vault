import React from 'react'
import "./HowItWorks.scss"

export default function HowItWorks() {
  return (
    <>
      <div className='HowItWorks section' id="how">
        <div className='howWrap'>
          <div className='HowItWorks_title-top'> Quisque sit amet laoreet magna</div>
          <div className='HowItWorks_title'>
            Nullam varius pretium dolor eget ultrices. <br />
            Cras convallis feugiat accumsan. <br />
            Donec placerat odio sed tincidunt vehicula. <br />
            Nulla facilisi. Suspendisse potenti.<br />
            Sed tempor purus risus, vel commodo dui hendrerit accumsan.<br />
            Donec facilisis feugiat lacus id iaculis.
          </div>


          <div className="HowItWorks-icon-box">
            <div className="HowItWorks-icon-box-inner">
              <div className="mainPageWhyUs-statistics-time ">
                <i className="fa-solid fa-cloud-arrow-up icons"></i>
                <p>Aenean vitae laoreet nunc</p>
                <p className='icon-subtitle'>Nam eu blandit ipsum. Duis metus orci, vestibulum a sem eu, pharetra laoreet leo. </p>
              </div>
              <div className="mainPageWhyUs-statistics-perDay ">
                <i className="fa-solid fa-file-shield icons"></i>
                <p> Maecenas non euismod ipsum</p>
                <p className='icon-subtitle'>Quisque pretium fermentum lacus sed maximus. Vestibulum vestibulum lorem eu vehicula sodales.</p>
              </div>
             {/*  <div className="mainPageWhyUs-statistics-perDay ">
                <i className="fa-solid fa-cubes icons"></i>
                <p>Vestibulum risus eros</p>
                <p className='icon-subtitle'>Donec malesuada pretium ligula id dictum. Pellentesque commodo suscipit magna, et feugiat massa imperdiet ac. </p>
              </div> */}
            </div>
            <div className="mainPageWhyUs-statistics">
            </div>
          </div>
        </div>
      </div>
    </>
  )
}