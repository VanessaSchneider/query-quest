import CategoryCard from "./CategoryCard";
import {getRandomCat} from "./category_data"


function Home({handleRandom, categories}) {


  
  
  function handleClick() {
  const randomNumber = getRandomCat()
  console.log(randomNumber)
handleRandom(randomNumber)
  }

  const catCard = categories.map((category)=>
  (<CategoryCard category={category} key={category.name}/> ))


    return (
      <div>
        <button onClick={handleClick}>Randomly Selected Category</button>
      <div className= "ui three stackable cards">
        {catCard}
      </div>
      </div>
    );
  }
  
  export default Home;