import React from 'react'

function CardDish(props) {
    console.log("content in props",props);
   function fin()
   {
    alert("hi")
   } 
   
  return (
     <div onClick={()=>{props.popupClicked(props)}}  className="card m-1" style={{width:"10rem"}}>

    <img className="card-img-top"src={props.item.strMealThumb} alt="" srcset="" />
    <div className="card-body">
    <h10 className="card-title">{props.item.strMeal}</h10>
    </div>
</div>
  )
}

export default CardDish
