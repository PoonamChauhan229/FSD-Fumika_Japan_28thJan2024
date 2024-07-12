import React from 'react'

const CartCard = ({moviename,movieposter,rating,summary}) => {
  return (
    <div>
      <div className="mx-4 rounded" style={{border:"2px solid red",height:"270px",width:"250px"}} >
        <img src={movieposter} alt=""  height="200" width="247"/>
        <div className='d-flex justify-content-between'>
        <h6>{moviename}</h6>
        <h6>{rating}</h6>
        </div>
        <div className='d-flex'>
       <p>{summary}</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia a nostrum quis delectus harum, perferendis dicta minima beatae ipsum?</p>
    </div>
    </div>
    </div>
  )
}

export default CartCard
