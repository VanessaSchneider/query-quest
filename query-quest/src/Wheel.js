import CategoryCard from "./CategoryCard";
import {getRandomCat} from "./category_data"


function Wheel({handleRandom, categories, randomCategory}) {

  function handleClick() {
  const randomNumber = getRandomCat()
  console.log(randomNumber)
  handleRandom(randomNumber)
  }

  const catCard = categories.map((category)=>
  (<CategoryCard category={category} key={category.name}/> ))

  const singleCatCard = <CategoryCard category = {randomCategory[0]} />

  //randomcategory[0] is our randomly selected category

    return (
      <div>
        <button onClick={handleClick}>Randomly Selected Category</button>
      <div className= "ui three stackable cards">
        {randomCategory !== false ? singleCatCard : catCard}
      </div>
      </div>
    );
  }
  
  export default Wheel;