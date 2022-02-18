const categories = [
    {
     id: 1,
      name: "Science",
      image:
        "🧪"
    },

    {
      id: 2,
      name: "Pokemon",
      image: <img src="https://www.warmoven.in/media/catalog/product/cache/e4dbbe88580d6bb18ca174b8700f08f3/image/14883cb6/pikachu-photo-cake-2.png.mst.webp" className = "pikasize" alt = "pikachu" />
    },

    {
        id: 3,
      name: "Literature",
      image:
        "📖"
    },

    {id: 4,
      name: "Art",
      image:
        "🎨"
    },

    {
        id: 5,
      name: "History",
      image:
        "📕"
    },

    {
        id: 6,
      name: "Entertainment",
      image:
        "🍿 🎟"
    },
  ];
  
  const getRandomCat = () => 
  categories[Math.floor(Math.random() * 6)]

  export {categories, getRandomCat} 


  

  
  