import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
Link
const Movie = ({movieposter,moviename,summary,rating,id,setMovieData}) => {
    const[show,setShow]=useState(false)
const[castShow,setCastShow]=useState(false)

// usNavigate()
const navigate=useNavigate()
const deleteMovie=async()=>{
    console.log(id)
     console.log(`https://66760b38a8d2b4d072f2415f.mockapi.io/movie/${id}`)
    let res=await fetch(`https://66760b38a8d2b4d072f2415f.mockapi.io/movie/${id}`,{
        method:"DELETE"
    })
    let data=await res.json()
    console.log(data)// output 
  
    if(data){//if data exists
        console.log("deleted sucessfully")
        //Update UI
        getMovieData()
    }
  
}

const getMovieData = async()=>{
    console.log("Movie data is called...")
    let res = await fetch ('https://66760b38a8d2b4d072f2415f.mockapi.io/movie')
    let data = await res.json()
    console.log(data)
    setMovieData(data)// movies
  }
 
 return (
    <div className="mx-4 rounded" style={{border:"2px solid red",height:"270px",width:"250px"}} >
        <img src={movieposter} alt=""  height="200" width="247"/>
        <div className='d-flex justify-content-between'>
        <h6>{moviename}</h6>
        <h6>{rating}</h6>
        </div>
        <div className='d-flex'>
            <span onClick={()=>{
            setShow(!show)
            setCastShow(false)
            }}>{show?<b>🔽</b>:<b>🔼</b>}</span>
       

            <span className='mx-2' onClick={()=>{
            setCastShow(!castShow)// summsry state
            setShow(false)//caste caste
            }}>{castShow?<b>💥</b>:<b>💫</b>}</span>
            
            {/* MOvie Info Button  */}
        {/* <Link to ={`/movie/in/${id}`}> <span className='mx-2'><b>ℹ</b></span></Link> */}

        {/* button tag */}
        <span onClick={()=>{
            navigate(`/movie/in/${id}`)
        }}>🟣</span>  
          {/* edit Button */}
        <span onClick={()=>navigate(`/editmovie/${id}`)}>✏</span>
        <span onClick={()=>deleteMovie()}>🚮</span>
        </div>
       {show && <p>{summary}</p>}
       {castShow && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia a nostrum quis delectus harum, perferendis dicta minima beatae ipsum?</p>}
    </div>
  )
}

export default Movie