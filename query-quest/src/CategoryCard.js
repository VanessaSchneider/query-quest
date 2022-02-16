function CategoryCard({category}) {
    return (
     <div className="catTile ui card">
     <div>
       <h1> {category.name}  </h1>
       <h3>{category.image}</h3>
     </div>
     </div>

    );
  }
  
  
  export default CategoryCard;