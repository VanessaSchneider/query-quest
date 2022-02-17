function CategoryCard({category, classes}) {
    return (
     <div className = {classes !== undefined ? classes : "catTile ui card"}>
     <div>
       <h1> {category.name}  </h1>
       <h1>{category.image}</h1>
     </div>
     </div>

    );
  }
  
  
  export default CategoryCard;