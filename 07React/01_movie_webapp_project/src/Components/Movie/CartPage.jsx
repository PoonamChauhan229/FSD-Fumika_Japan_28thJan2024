import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from './CartCard'

const CartPage = () => {
    const cartItems=useSelector(store=>store.cart.items)
    console.log(cartItems)
  return (
    <>
     <button> Clear Cart</button>
   
    <div style={{display:"flex",flexWrap:"wrap"}}>
       
    {/* {
        cartItems.map((element,index)=><h2>{element.moviename}</h2>
        )
    } */}

        {
        cartItems.map((element,index)=><CartCard {...element}/>
        )
     }

    </div>
    </>
  )
}

export default CartPage