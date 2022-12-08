import { Button } from '@mui/material'
import React from 'react'
import "./GetStarted.css"

export default function GetStarted() {
  return (
    <>
      <div className='getStarted' id='Start'>
        <div className='getStarted_image1' />
        <div className='getStarted_title'>Secure yourself</div>
        <div className='getStarted_subTitle1'>VPN that you can trust</div>
        <Button href="#how" className='getStarted_button' variant='outlined'>Get Started</Button>
        <div className='getStarted_subTitle2'>30 days free premium trial</div>
      </div>
    
    </>
  )
}
