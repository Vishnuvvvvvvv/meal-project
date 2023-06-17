import React from 'react'
import Card from "./Card"
import { useState, useEffect } from "react";
import MealComponent from './MealComponent';
import CardDish from './CardDish';
import PopupDish from './PopupDish';
import AddtoCart from './AddtoCart';

function Body() {

  let [Menu, setMenu] = useState([]);
  let [categoryMenu, setcategoryMenu] = useState([]);
  let [loading, setloading] = useState(false);
  let [popup, setPopup] = useState(false)
  let [popupDetails, setpopupDetails] = useState()
  let [addToCart, setaddToCart] = useState([{}])
  console.log("Initial", loading)

  function addTocartFn(heading,image)
  {
    setaddToCart([...addToCart,{"heading":heading,"image":image}])
  }

  console.log("addToCart",addToCart);



  function popupClicked(strMeal) {

    console.log("StrMeal == === ", strMeal)
    setpopupDetails(strMeal)
    setPopup(true)

  }

  function popupCloseFn(strMeal) {


    setPopup(false);
  }

  async function getMeals() {
    setloading(true)
    const URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=s";
    let response = await fetch(URL);
    let data = await response.json();
    // console.log("Menu data",data);
    setMenu(data.meals);
    setloading(false);
    console.log("Final", loading)
  }


  async function getMealsByCategory() {
    const URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data.categories)
    setcategoryMenu(data.categories)
  }




  useEffect(() => {
    getMeals();
    getMealsByCategory();
  }, [])

  let index = 10;
  let menuData = Menu.map((item, number) => {


    if (number < index) {
      return (
        // <Card
        // component={{
        //     cardTitle:item.strMeal,
        //     imgSrc:item.strMealThumb
        //  />}}
        <CardDish

          item={item}
          popupClicked={popupClicked}
          

        />

      )
    }


  })

  return (
    <div>
      <h1 className="main-heading">Our Meals!</h1>


       <div className="menu-container">
        {menuData}

      </div>


      {popup && <PopupDish
        popupCloseFn={popupCloseFn}
        popupDetails={popupDetails}
        addTocartFn={addTocartFn}
        
      />}
      {!loading ? (

        <MealComponent
          MealContent={categoryMenu}
          allMenus={Menu}
          setaddToCart={setaddToCart}
          addToCart={addToCart}
        />)

        : "loading"}


        <AddtoCart
        addToCart={addToCart}
        />

    </div>
  )
}



export default Body
