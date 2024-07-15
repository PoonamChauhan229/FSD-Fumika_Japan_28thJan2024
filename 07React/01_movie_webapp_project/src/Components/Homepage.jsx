import React from 'react'
import Sample from './Sample'
import AboutUs_Section from './AboutUs_Section'
import Display from './Display'
import ContactUs from './ContactUs'
import Classprofile from './ClassComponent/Classprofile'
const Homepage = () => {
  return (
    <> 
       {/* <Classprofile/>    */}
    <Sample/>
    <AboutUs_Section/>
    <Display/>
    <ContactUs/>
    </>
  )
}

export default Homepage