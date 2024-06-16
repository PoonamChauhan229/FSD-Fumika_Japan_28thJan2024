
import { useState } from 'react'
import './App.css'
import ImageDisplay from './Components/ImageDisplay'
import Sample from './Components/Sample'
import img1 from './assets/img1.jpg'
import imga1 from './assets/imga1.avif'
import AboutUs_Section from './Components/AboutUs_Section'
import AboutUs from './Components/AboutUs'
import Navbar from './Components/Navbar'
import Display from './Components/Display'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './Components/ContactUs'
import Homepage from './Components/Homepage'
import DesignInfo from './Components/DesignInfo'

function App(){
//useState > Hook > Functions
let [age, setAge] = useState(0);
// const [stateVaraible,setStateVariable]=useState()
// stateVaraible=> InitialState/Initialvalue 10
//setstate() > update 10 -20 -30 >> function
let [display,setDisplay]=useState("Hello World----")

// click > show value should be updated?

let val=90;

  return (
    <div>
    <Navbar/>
    
    {/* <Sample/>   {/* Home Page */}   
    {/* <AboutUs_Section/>   {/* About Page */}  
    {/* <Display/>   {/* Services */}
    {/* <ContactUs/> */}

{/* ALways in App.jsx */}
    <Routes>
        <Route path="/" element={<Homepage/>}/> 
        <Route path='/sample' element={<Sample/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/services' element={<Display/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/in/movie/:movieName' element={<DesignInfo/>}/>

    </Routes>

    </div>
  ) 
}

export default App
