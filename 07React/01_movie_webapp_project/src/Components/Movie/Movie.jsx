import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import cartContext from '../../utils/cartContext'
import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/cartSlice'

const Movie = ({movieposter,moviename,summary,rating,id,setMovieData,element}) => {
    const [cartUCtxt,setCartUCtxt]=useContext(cartContext)
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

  
    //btn is pressed > dispacth the action> reducer function
    const dispatch=useDispatch()
    const handleAdditem=(item)=>{
        console.log(item)
        dispatch(addItem(item))
    }
 
 return (
    <div className="mx-4 rounded" style={{border:"2px solid red",height:"270px",width:"250px"}} >
        <img src={movieposter} alt=""  height="200" width="247"/>
        <div className='d-flex justify-content-between'>
        <h6>{moviename}</h6>
        <h6>{rating}</h6>
        </div>
        <div className='d-flex'>
        <button className='btn p-0 m-0'  onClick={()=>{
            setShow(!show)
            setCastShow(false)
            }}>{show===true?<b>🔽</b>:<b>🔼</b>}</button>
       

       <button className='btn p-0 m-0 mx-2' onClick={()=>{
            setCastShow(!castShow)// summsry state
            setShow(false)//caste caste
            }}>{castShow?<b>💥</b>:<b>💫</b>}</button>
            
            {/* MOvie Info Button  */}
        {/* <Link to ={`/movie/in/${id}`}> <span className='mx-2'><b>ℹ</b></span></Link> */}

        {/* button tag */}
        <button className='btn p-0 m-0'  onClick={()=>{
            navigate(`/movie/in/${id}`)
        }}>🟣</button>  
          {/* edit Button */}
          <button className='btn p-0 m-0'  onClick={()=>navigate(`/editmovie/${id}`)}>✏</button>
        <button className='btn p-0 m-0'  onClick={()=>deleteMovie()}>🚮</button>
        <button className='btn p-0 m-0' onClick={()=>setCartUCtxt(cartUCtxt+1)}>🛒</button>
        
        <button className='btn p-0 m-0' onClick={()=>{handleAdditem(element)}}>Redux</button>
        </div>
       {show && <p>{summary}</p>}
       {castShow && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia a nostrum quis delectus harum, perferendis dicta minima beatae ipsum?</p>}
    </div>
  )
}

export default Movie