import React from 'react'


function Card(props) {

//props.component.imgSrc
//props.component.cardTitle

  return (
   
         
    <div class="card m-3" style={{width: "18rem"}}>
    <img src={props.component.imgSrc} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{props.component.cardTitle}</h5>
      
   
    </div>
  </div>


  )
}



export default Card
