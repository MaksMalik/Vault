import React from 'react'
import "./Contact.scss"
import { TextField, Button, FormGroup, FormControlLabel, Checkbox } from '@mui/material';


export default function Contact() {
  return (
    <>
      <div className='Contact section' id="contact">
        <div className='contactWrap'>
          <div className='Contact_title-top' > Donec nec mauris gravida</div>


          <div className="ContactRight ">
            <div className="Contact-form ">
              <TextField
                required
                id="outlined-required"
                label="E-mail"
              />
              <TextField
                id="outlined"
                label="Phone number"
              />
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={6}
              />
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              </FormGroup>
              <Button variant="outlined" className="button-send">Send</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}