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
      image:
        "🐱"
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


  

  
  