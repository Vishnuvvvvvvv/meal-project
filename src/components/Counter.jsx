import React,{useReducer,useContext}from 'react'
import { stateContext} from '../context/AppProvider';

const initialState ={
    cart:0
}

const reducer=(state,action)=>{
    
if(action === "increment")
    return {cart:state.cart+1};
 else if(action ==="decrement")
    return {cart:state.cart-1};
 else 
    return initialState      
  
  
}




function Counter() {
    const cartitem = useContext(stateContext)
    console.log("cart item",cartitem)
let [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
        <h3>{state.cart}</h3>
        <button onClick={()=>{dispatch("increment")}}>incrrement</button>
        <button onClick={()=>{dispatch("decrement")}}>decrement</button>
        <button onClick={()=>{dispatch("reseet")}}>reset </button>





    </div>
  )
}

export default Counter
