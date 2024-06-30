import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddMovie = ({setMovieData}) => {
  const navigate=useNavigate()
  const [movieName,setMovieName]=useState("");
  const [moviePoster,setMoviePoster]=useState("");
  const [movieRating,setMovieRating]=useState("");
  const [movieSummary,setMovieSummary]=useState("");
  const [moviePublishedYear,setMoviePublishedYear]=useState("");
  const postMovies=async()=>{
    console.log("Movie POsted to the DB")
    let newMovie={
      movieposter:moviePoster,
      moviename:movieName,
      rating:movieRating,
      summary:movieSummary,
      publishedYear:moviePublishedYear
    }
    console.log("NEW MOVIE:",newMovie)
    let res = await fetch ('https://66760b38a8d2b4d072f2415f.mockapi.io/movie',
    {
      method: 'POST',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(newMovie)// sending >string format
    })
    let data = await res.json()
    console.log(data)
    getMovieData()
  }

  const getMovieData = async()=>{
    console.log("Movie data is called...")
    let res = await fetch ('https://66760b38a8d2b4d072f2415f.mockapi.io/movie')
    let data = await res.json()
    console.log(data)
    setMovieData(data)
  }
  return (
    <div className='mx-auto  w-75 text-center'>
      <h3>Add Movie</h3>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='moviename' value={movieName} onChange={(e)=>setMovieName(e.target.value)}/><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='posterimage'value={moviePoster}
      onChange={(e)=>setMoviePoster(e.target.value)} /><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='rating' value={movieRating}
      onChange={(e)=>setMovieRating(e.target.value)} /><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='summary' value={movieSummary}
      onChange={(e)=>setMovieSummary(e.target.value)} /><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='publishedYear' value={moviePublishedYear} onChange={(e)=>setMoviePublishedYear(e.target.value)}/><br/><br/>



      <button className='btn btn-primary mx-2' onClick={()=>{postMovies()}}>ADD MOVIE</button>
      <button className='btn btn-primary mx-2' onClick={()=>{navigate('/movie')}}>Back🔙</button>
    </div>
  )
}

export default AddMovie