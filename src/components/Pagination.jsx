import React ,{useState}from 'react'

function Pagination(props) {

 
    
  function onClickfunction(event){
    console.log(event.target.id)
    
    props.setCurrentPage(event.target.id)
    props.setActiveclasss(event.target.id)
      
   
  }
 
  console.log("Active = "+props.activeclass);
   let array =[]
    for(let i=1;i<=Math.ceil(props.paginationContent.length/props.itemPerpage);i++){
        array.push(i);
    }
    // console.log(array)
   let number = array.map((item)=>{
    console.log(item+"==? "+props.activeclass+" "+"checking.?",item == props.activeclass?"pagnBtnActive":"pagination")
    console.log(item == props.activeclass)   
    return(
              <div id={item} onClick={onClickfunction} className={item == props.activeclass?"pagnBtnActive":"pagination"}>
               {item}
              
                </div>
        )
    })

    

  return (
    <section>
    <div  className="section">
       {number}
    </div>
    </section>
  )
}

export default Pagination