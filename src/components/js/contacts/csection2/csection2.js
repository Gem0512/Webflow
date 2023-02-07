import React from 'react'
import './csection2.css'
export default function Csection2() {
  return (
    <div className="csection2">
      <div className="csection2-l">
         <div className="one">
            GET IN TOUCH
         </div>
         <div className="two">
            <img src="https://uploads-ssl.webflow.com/5e457cdd6bf0d06897420d3a/5e457cdd6bf0d034ee420d4c_envelope.svg"></img>
            <p>contact@stoneagency.com</p>
         </div>
         <div className="three">
            <img src='https://uploads-ssl.webflow.com/5e457cdd6bf0d06897420d3a/5e457cdd6bf0d05e3a420d4b_map-pin.svg'></img>
            <pre>
            1423 Elk Steet
            Brooklyn, NY 82328
            </pre>
         </div>
      </div>
      <div className="csection2-r">
         <div className="input1">
         <input  autocomplete="on" placeholder="NAME"  />
         </div>
         <div className="input2" name="email" autocomplete="on">
         <input placeholder="EMAIL"  />
         </div>
         <div className="input3">
         <input placeholder="BUDGET"  />
         </div>
         <div className="input4">
         <input placeholder="PROJECT DESCRIPTION"  />
         </div>
         <div className="bt">
            <button>SEND EMAIL</button>
         </div>
         <p>We'll get back to you within 48 hours. </p>

         

      </div>
      
    </div>
  )
}
