import CategoryCard from "./CategoryCard";
import {getRandomCat} from "./category_data"
import { useHistory } from "react-router-dom";
import React, {useState} from "react";


function Wheel({handleRandom, categories, randomCategory}) {
    const history = useHistory();
    const routeChange = () =>{ 
        let path = `/game`; 
        history.push(path);
    }

  function handleRandomClick() {
  const randomNumber = getRandomCat()
  handleRandom(randomNumber)
  setTimeout(()=>routeChange(), 1200)
  }


  const catCard = categories.map((category)=>
  (<CategoryCard category={category} key={category.name}/> ))
    //randomcategory[0] is our randomly selected category
  const singleCatCard = <CategoryCard category = {randomCategory[0]} classes = {"singleCard"}/>


    return (
      <div>
        <br></br>
        <button onClick={handleRandomClick}>Randomly Select Category</button>
        <div className= "ui three stackable cards">
        {randomCategory !== false ? singleCatCard : catCard}
       </div>
      
      </div>
    );
  }
  
  export default Wheel;