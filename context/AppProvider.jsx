
import {createContext,useReducer} from 'react'
const  dispatchContext = createContext();
const stateContext = createContext();


let intitialState={
    cart:[]
}

const reducer = (state,action)=>{
    switch(action.type){
    case "add to cart":
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }
        default:{
            return state;
        }
    }
    
}


function AppProvider({children}) {

    let [state,dispatch] = useReducer(reducer,intitialState)
  return (
    <div>
        <dispatchContext.Provider value={dispatch}>
            <stateContext.Provider value={state}>
                {children}
            </stateContext.Provider >    
        </dispatchContext.Provider >
    
    </div>
  )
}

export {AppProvider,dispatchContext,stateContext}