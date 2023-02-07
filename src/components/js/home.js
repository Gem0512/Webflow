import React from 'react'
import '../scss/css/home.css'
import Section1 from './home/section1/section1'
import Section2 from './home/section2/section2'
import Section3 from './home/section3/section3'
import Section4 from './home/section4/section4'
import Section5 from './home/section5/section5'
export default function Home() {
  return (
    <div className='main-home'>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
    </div>
  )
}
