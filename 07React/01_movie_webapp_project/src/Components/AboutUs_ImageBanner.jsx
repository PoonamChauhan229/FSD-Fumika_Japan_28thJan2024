import React from 'react'

const AboutUs_ImageBanner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="card text-center text-white"  style={{width:"90%",height:"400px"}}>
        <img src="https://images.unsplash.com/photo-1586899028174-e7098604235b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2F0Y2hpbmclMjB0dnxlbnwwfHwwfHx8MA%3D%3D"
        s="card-img" alt="..."  style={{width:"100%",height:"400px",opacity:"85%"}}/>
        <div className="card-img-overlay">
        <h1><i className="fa-solid fa-couch"></i><i className="fa-solid fa-wine-glass"></i> MovieStation</h1>
        <h3 className="card-text">Connecting movie fans with their favorite content worldwide</h3>
        </div>
        </div>
    </div>
    
    </>
  )
}

export default AboutUs_ImageBanner