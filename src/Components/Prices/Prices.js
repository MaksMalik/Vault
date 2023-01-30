import React from 'react'
import "./Prices.scss"

export default function Prices() {
  return (
    <>
      <div className='Price section'>
        <div className='priceWrap'>
          <div className='Price_title-top' id="prices"> Nunc elementum metus in facilisis</div>

            <div className='Price-prices'>

              <div className='offer-offers'>
                <div className='offer-offer1 ' >
                  <div className='nameOffer'>Standard</div>
                  <div className='pricing'>$35</div>
                  <div className='list'>
                    <div>
                      <i className='fa-solid fa-check'></i> Lorem ipsum
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Vestibulum nec
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Nulla sit
                    </div>
                    <div>
                      <i className='fa-solid fa-xmark'></i> Mauris vitae
                    </div>
                    <div>
                      <i className='fa-solid fa-xmark'></i> Pellentesque cursus
                    </div>
                    <div>
                      <i className='fa-solid fa-xmark'></i> Nullam elementum
                    </div>

                  </div>
 
                </div>
                <div className='offer-offer1'>
                  <div className='nameOffer'>Premium</div>
                  <div className='pricing'>$55</div>
                  <div className='list'>
                    <div>
                      <i className='fa-solid fa-check'></i> Lorem ipsum
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Vestibulum nec
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Nulla sit
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Mauris vitae
                    </div>
                    <div>
                      <i className='fa-solid fa-xmark'></i> Pellentesque cursus
                    </div>
                    <div>
                      <i className='fa-solid fa-xmark'></i> Nullam elementum
                    </div>

                  </div>

                </div>
                <div className='offer-offer1' >
                  <div className='nameOffer'>Unlimited</div>
                  <div className='pricing'>$75</div>
                  <div className='list'>
                    <div>
                      <i className='fa-solid fa-check'></i> Lorem ipsum
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Vestibulum nec
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Nulla sit
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Mauris vitae
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Pellentesque cursus
                    </div>
                    <div>
                      <i className='fa-solid fa-check'></i> Nullam elementum
                    </div>

                </div>

              </div>
            </div>
            <div className='price-underTitle'>*Aenean ultricies leo eget pulvinar volutpat. Etiam in venenatis eros, a rutrum quam. </div>
          </div>
        </div>
      </div>
    </>
  )
}
