
import { useEffect, useState } from 'react'
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
import MovieInfo from './Components/Movie/MovieInfo'
import Moviedisplay from './Components/Movie/Moviedisplay'
import MovieSection from './Components/Movie/MovieSection'
import AddMovie from './Components/Movie/AddMovie'
import EditMovie from './Components/Movie/EditMovie'
import PropDrilling from './Components/PropDrilling/PropDrilling'
import Context from './Components/useContext/Context'
import {movie} from './utils/constant'
import cartContext from './utils/cartContext'
import Adduser_Formik from './Components/Movie/Adduser_Formik'
import AddMovie_Formik from './Components/Movie/AddMovie_Formik'


function App(){
//useState > Hook > Functions
let [age, setAge] = useState(0);
// const [stateVaraible,setStateVariable]=useState()
// stateVaraible=> InitialState/Initialvalue 10
//setstate() > update 10 -20 -30 >> function
let [display,setDisplay]=useState("Hello World----")

// click > show value should be updated?


const [movieData,setMovieData] = useState([])
const [cartUCtxt,setCartUCtxt] =useState(0)
  
  const getMovieData = async()=>{
    console.log("Movie data is called...")
    let res = await fetch ('https://66760b38a8d2b4d072f2415f.mockapi.io/movie')
    let data = await res.json()
    console.log(data)
    setMovieData(data)
  }
  useEffect(()=>{
    getMovieData()
  },[])
  return (
    // <div style={{backgroundColor:"black",height:"100vh"}}>
    <cartContext.Provider value={[cartUCtxt,setCartUCtxt]}>
      <Adduser_Formik/>
      <AddMovie_Formik setMovieData={setMovieData}/>
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
        <Route path='/movie' element={<Moviedisplay movieData={movieData} setMovieData={setMovieData}/>}/>  
        <Route path='/movie/in/:id' element={<MovieInfo movie={movie}/>}/>         
        <Route path='/reactbootstrap' element={<MovieSection/>}/>
        <Route path='/addmovie' element={<AddMovie setMovieData={setMovieData}/>}/>
        <Route path='/editmovie/:id' element={<EditMovie/>}/>
        <Route path='/propdrilling' element={<PropDrilling/>}/>
        <Route path='/context' element={<Context/>}/>
 
    </Routes>

    </div>
    </cartContext.Provider>
  ) 
}

export default App
