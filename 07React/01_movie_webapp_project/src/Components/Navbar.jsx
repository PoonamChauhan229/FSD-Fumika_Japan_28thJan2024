import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
  <>
  <div className='d-flex justify-content-between bg-dark text-white p-2'>
    <div>MovieWorld</div>
    <div  className='d-flex justify-content-between gap-2'>
        {/* <div><a href='/'>Home</a></div>
        <div><a href='/about'>About Us</a></div> */}
         <div><Link to='/'>Home</Link></div>
         <div><Link to='/sample'>Sample</Link></div>
         <div><Link to='/about'>About Us</Link></div>
        <div ><Link to='/services' className='text-warning'>Services</Link></div>
        <div><Link to='/contact' className='text-warning'>Contact Us</Link></div>
    </div>
  </div>
  </>
  )
}

export default Navbar