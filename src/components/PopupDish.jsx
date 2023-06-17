import React from 'react'
import {useContext} from "react"
import {dispatchContext} from "../context/AppProvider"
function PopupDish(props) {
    let dispatch = useContext(dispatchContext)
      console.log("THis is dispatch",dispatch)
       console.log("popupdish ==",props)
  return (
    <div className="popup">
        <div className="popup-header">
            <h2>{props.popupDetails.item.strMeal}</h2><span onClick={props.popupCloseFn} className="popup-close">X</span>

        </div>
        <div className="popup-inner-body">

            <img src={props.popupDetails.item.strMealThumb} alt="" />
            <div className="popup-inner-ingredients">

                <span className="inner-ingredients">{props.popupDetails.item.strIngredient1}</span>
                <span className="inner-ingredients">{props.popupDetails.item.strIngredient2}</span>
                <span className="inner-ingredients">{props.popupDetails.item.strIngredient3}</span>
                <span className="inner-ingredients">{props.popupDetails.item.strIngredient4}</span>
                <span className="inner-ingredients">{props.popupDetails.item.strIngredient5}</span>
                <span className="inner-ingredients">{props.popupDetails.item.strIngredient6}</span>
                <span className="inner-ingredients">{props.popupDetails.item.strIngredient7}</span>
                <span className="inner-ingredients">{props.popupDetails.item.strIngredient8}</span>
            </div>

            <div className="popup-inner-instruction">
                <p className="inner-instruction">{props.popupDetails.item.strInstructions}</p>


            </div>

                <button onClick={()=>{
                    dispatch({type:"add to cart",payload:{title:props.popupDetails.item.strMeal,img:props.popupDetails.item.strMealThumb}})
                }} className="btn btn-primary">Add to cart</button>
        </div>
    </div>
  )
}

export default PopupDish

/**()=>{
                    props.addTocartFn(props.popupDetails.item.strMeal,props.popupDetails.item.strMealThumb) */