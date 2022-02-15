function CategoryCard({category}) {
    console.log(category)
    return (
     <div className="catTile ui card">
     <div>
       <h1> {category.name}  </h1>
     </div>
     </div>

    );
  }
  
  
  export default CategoryCard;