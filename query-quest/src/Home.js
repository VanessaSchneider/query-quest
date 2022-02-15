import CategoryCard from "./CategoryCard";
import categories from "./category_data";


function Home({randomCategory, setRandomCategory}) {


  const catCard = categories.map((category)=>
  (<CategoryCard category={category} key={category.id}/> ))


  
  function handleRandomClick(event){
   const getRandomCat = () => 
  categories[Math.floor(Math.random() * categories.length)]
    const randomId = parseInt((getRandomCat().id))
    console.log(randomId)
 }





    return (
      <div>
        <button onClick={handleRandomClick}>Randomly Selected Category</button>
      <div className= "ui three stackable cards">
        {catCard}
      </div>
      </div>
    );
  }
  
  export default Home;