import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import cartContext from '../utils/cartContext'
import { useSelector } from 'react-redux'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = ({mode,setMode}) => {
  const cartNavbar=useContext(cartContext)
  console.log(cartNavbar)
  console.log(useContext(cartContext))

  // subcribing to the store
  const cartItems=useSelector(store=>store.cart.items)
  console.log(cartItems.length)

  return (
  <>
  <div className='d-flex justify-content-between bg-dark text-white p-2'>
    <div>MovieWorld</div>
    
    <div  className='d-flex justify-content-between gap-2'>
        {/* <div><a href='/'>Home</a></div>
        <div><a href='/about'>About Us</a></div> */}
         <div><Link to='/'>Home</Link></div>
         <div><Link to='/movie' className='text-warning'>All Movies</Link></div>
         {/* <div><Link to='/sample'>Sample</Link></div>
         <div><Link to='/about'>About Us</Link></div> */}
        {/* <div ><Link to='/services' className='text-warning'>Services</Link></div> */}
        {/* <div><Link to='/contact' className='text-warning'>Contact Us</Link></div> */}
        <div><Link to='/reactbootstrap' className='text-warning'>React Bootstrap</Link></div>
        <div><Link to='/addmovie' className='text-success'>Add Movie</Link></div> 
        <div><Link to='/propdrilling' className='text-info'>PropDrilling</Link></div> 
        <div><Link to='/context' className='text-success'>UseContext</Link></div> 
        <div><Link to='/adduserFormik' className='text-info'>Add_User_Formik</Link></div> 
        <div><Link to='/addmovieFormik' className='text-success'>Add_Movie_Formik</Link></div> 
        
        
        <div><Link  className='text-warning'>🛒{cartNavbar}</Link></div> 
        <div><Link to='/cart' className='text-warning'>Redux{cartItems.length}</Link></div> 
       {/* mode and setMode */}
        <div><span
        onClick={()=>{
          // setMode("light")
          //true?"truedata":"falsedata"
          setMode(mode=="light"?"dark":"light")// setMode(light)
          console.log(mode)
        }}
        >
        {mode==="light"?<><DarkModeIcon/>{mode.toUpperCase()}</>:<><LightModeIcon/>{mode.toUpperCase()}</>}
        </span></div>
    </div>
  </div>
  </>
  )
}

export default Navbar