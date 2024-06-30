import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const EditMovie = () => {
  const [singleMovie,setSingleMovies]=useState()
  const {id}=useParams()

  

  const getMovieData = async()=>{
    console.log("Movie data is called...")
    let res = await fetch (`https://66760b38a8d2b4d072f2415f.mockapi.io/movie/${id}`)
    let data = await res.json()
    console.log(data)
    setSingleMovies(data)
  }
  console.log(singleMovie)

  useEffect(()=>getMovieData(),[])// when ur page is loaded 

  return (
   <>
   {
    singleMovie?
    <EditMovieForm singleMovie={singleMovie} id={id}/>// LOAD WHEN API IS COMPLETED 
    :
    <p>Loading.....</p> // WHEN API CALL IS RUNNING
   }
   </>
  )
}

export default EditMovie


const EditMovieForm=({singleMovie,id})=>{ 

  const navigate=useNavigate()
  const [movieName,setMovieName]=useState(singleMovie.moviename);
  const [moviePoster,setMoviePoster]=useState(singleMovie.movieposter);
  const [movieRating,setMovieRating]=useState(singleMovie.rating);
  const [movieSummary,setMovieSummary]=useState(singleMovie.summary);
  const [moviePublishedYear,setMoviePublishedYear]=useState(singleMovie.publishedYear);

  const updateMovies=async()=>{
    console.log("Movie POsted to the DB")
    let updatedMovie={
      // key:value
      //key > actual in api what key is mentioned value > useState values
      movieposter:moviePoster,
      moviename:movieName,
      rating:movieRating,
      summary:movieSummary,
      publishedYear:moviePublishedYear
    }
    console.log("Updated MOVIE:",updatedMovie)
    let res = await fetch (`https://66760b38a8d2b4d072f2415f.mockapi.io/movie/${id}`,
    {
      method: 'PUT',
      headers: {'content-type':'application/json'},
      // Send your data in the request body as JSON
      body: JSON.stringify(updatedMovie)// sending >string format
    })
    let data = await res.json()
    console.log(data)
    
  }
  return(
    <>
     <div className='mx-auto  w-75 text-center'>
      <h3>EDIT Movie</h3>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='moviename' value={movieName} onChange={(e)=>setMovieName(e.target.value)}/><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='posterimage'value={moviePoster}
      onChange={(e)=>setMoviePoster(e.target.value)} /><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='rating' value={movieRating}
      onChange={(e)=>setMovieRating(e.target.value)} /><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='summary' value={movieSummary}
      onChange={(e)=>setMovieSummary(e.target.value)} /><br/><br/>
      <input className="p-2 rounded w-50 border-primary border" type="text" name="" id="" placeholder='publishedYear' value={moviePublishedYear} onChange={(e)=>setMoviePublishedYear(e.target.value)}/><br/><br/>



      <button className='btn btn-primary mx-2' onClick={()=>{updateMovies()}}>UPDATE & SAVE</button>
    </div>
    
    </>
  )

}