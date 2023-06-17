import React ,{useContext} from 'react'
import {stateContext} from "../context/AppProvider"

function AddtoCart({ addToCart }) {
    const state =  useContext(stateContext)
        console.log("state context",state.cart
        );
    console.log("addToCart function 2:;", addToCart)


    let cartDishes = state.cart.map((item) => {
        console.log("mapepd item in add tocart = ",item)
       
        {
        return (
           
            <div  className="card m-1" style={{width:"8rem"}}>

            <img className="card-img-top"src={item.img} alt="" srcset="" />
            <div className="card-body">
            <h10 className="card-title">{item.title}</h10>
          
            </div>
        </div>

        /**
         * 
         * 
         *  <div   className="card m-1" style={{width:"10rem"}}>

    <img className="card-img-top"src={item.image} alt="" srcset="" />
    <div className="card-body">
    <h10 className="card-title">{item.heading}</h10>
    </div>
</div>

         */

         )
        }

    })
    return (
        <>
        <h2>My Cart Dishes</h2>
        <div className="cart-container">
            
            {cartDishes}
             {/* {img} */}
           
            

        </div>
        </>
    )
}

export default AddtoCart