import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
Link
const Movie = ({movieposter,moviename,summary,rating,id}) => {
    const[show,setShow]=useState(false)
const[castShow,setCastShow]=useState(false)

// usNavigate()
const navigate=useNavigate()
 
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
        <button onClick={()=>{
            navigate(`/movie/in/${id}`)
        }}>🟣</button>
        </div>
       {show && <p>{summary}</p>}
       {castShow && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia a nostrum quis delectus harum, perferendis dicta minima beatae ipsum?</p>}
    </div>
  )
}

export default Movie