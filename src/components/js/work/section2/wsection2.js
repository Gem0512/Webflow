import React from 'react'
import './wsection2.css'
export default function Section2() {
  return (
    <div className="wsection2">
      <div className="st2-l">
        <div className='title'>
             WEBFLOW
        </div>
        <div className='content'>
        Vestibulum sed commodo nunc, eu aliquet sem. Curabitur semper, sem ut posuere tincidunt, sem velit sollicitudin odio, quis hendrerit sapien nunc sit amet sem. .
        </div>
        <br></br>
        <div className="tag">
            <div className="web">
                 Web Design
            </div>
            <div className="icon">
                Icon Design
            </div>
        </div>
        <br></br>
        <button>VIEW PROJECT</button>
      </div>
      <div className="st2-r">
       <img src='https://uploads-ssl.webflow.com/5e457cdd6bf0d06897420d3a/5e457cdd6bf0d046b2420d5a_Project.jpg'></img>
      </div>
      
    </div>
  )
}
