import React,{useContext} from 'react'
import {stateContext} from "../context/AppProvider"



function MyCart() {
    const cartItems = useContext(stateContext)
    console.log("Cart Items::::::",cartItems.cart)
  let carts =   cartItems.cart.map((items)=>{
        return(
        <div >
        
<div  className="card m-1" style={{width:"8rem"}}>
<img className="card-img-top"src={items.img} alt="" srcset="" />
<div className="card-body">
<h10 className="card-title">{items.title}</h10>
</div>
</div>
        
        </div>
        )
    })
  return (
    <>
    <h2 className='cart-title'>My Cart </h2>
    <div className="cart-added-items">
        
        {carts}
        </div>
        </>
  )
}

export default MyCart