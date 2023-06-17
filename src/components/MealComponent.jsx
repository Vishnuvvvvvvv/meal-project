import React,{useState} from 'react'
import Pagination from './Pagination';
import CardDish from './CardDish';
import PopupDish from './PopupDish';
import AddtoCart from './AddtoCart';

function MealComponent(props) {
   console.log("props heere== ",props)

   

    let [allMenus,setallMenus] =  useState(props.allMenus)
   
    let [activeDish,setactiveDish] = useState();
    let [itemsPerPage,setitemsPerPage] = useState(4);
    let [currentPage,setCurrentPage] = useState(1);
    let [popup,setPopup] = useState(false)
  //  let [addToCart, setaddToCart] = useState([{}])
   
  
    function addTocartFn(heading,image)
    {
    props.setaddToCart([...props.addToCart,{"heading":heading,"image":image}])
    }
  
console.log("addToCart9",props.addToCart)
    function popupCloseFn()
    {
    setPopup(false);
    }
    let endingindex = currentPage*itemsPerPage;
    let startingindex = endingindex - itemsPerPage;
        let [popupDetails,setpopupDetails] = useState()
    function popupClicked(strMeal)
    {setpopupDetails(strMeal)
      // alert("hihaloo")
      setPopup(true);
    }
   
    let Beefitems =  props.allMenus.filter((item)=>{
      return item.strCategory==="Beef"
    }).map((item)=>{
      return(
       
       <CardDish
       item={item}
       popupClicked={popupClicked}
       />
      )
    })
    let [filteredDishes,setfilteredDishes] = useState([Beefitems])
    let slicedDishes = filteredDishes.slice(startingindex,endingindex);
    console.log("sliced diseh",slicedDishes)
    let [activeclass,setActiveclasss] = useState("1")



function  itemClicked(category)
  {
    console.log("Category",category)
      setactiveDish(category);
      setCurrentPage("1")
 let filteredDishesare =  allMenus.filter((item)=>{
    return item.strCategory===category
   }).map((item)=>{
         
    return(
     
      <CardDish
      item={item}
      popupClicked={popupClicked}
      />
    )
   })

   setfilteredDishes(filteredDishesare);
   setActiveclasss("1");
   console.log("All set!")
  }



    //   console.log("Props,",props)
  let CatgeoryContent =  props.MealContent.map((item)=>{

    return(
    <li id=""className={item.strCategory === activeDish ? "activeclass":"li"}onClick={()=>{itemClicked(item.strCategory)}} > {item.strCategory} </li>
    )
    }
    )
    console.log("filteredDishes.length>0",filteredDishes.length>0)
  return (
    <>
    <div className="text-center">
    <h3 className="mt-5">Filtered Dishes</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae, aliquid maxime. Provident, voluptate! Molestias suscipit illo necessitatibus eum voluptatem quia quibusdam aut placeat! Recusandae placeat labore expedita officia cupiditate consectetur.</p>
    </div>
    <div className="Category-Content">
        {CatgeoryContent}
       
    </div>
   {popup && <PopupDish
   
   popupCloseFn={popupCloseFn}
   popupDetails={popupDetails}
   addTocartFn={addTocartFn}

   />}
   
    <div className="Favourited-item">
       {/* {Beefitems}  */}
      
      {filteredDishes.length>0? slicedDishes : <div className="no-dish"> <h2>Sooryy </h2></div>}
    

    </div>

    <Pagination
    paginationContent={filteredDishes}
    itemPerpage={itemsPerPage}
    setCurrentPage={setCurrentPage}
    setActiveclasss={setActiveclasss}
    activeclass={activeclass}
    />
    {/* <AddtoCart
    
    addToCart={propsaddToCart}/> */}



    </>
  )
}



export default MealComponent
