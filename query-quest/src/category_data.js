const categories = [
    {
     id: 1,
      name: "Science",
      image:
        "img"
    },

    {
      id: 2,
      name: "Pokemon",
      image:
        "img"
    },

    {
        id: 3,
      name: "Literature",
      image:
        "img"
    },

    {id: 4,
      name: "Art",
      image:
        "img"
    },

    {
        id: 5,
      name: "History",
      image:
        "img"
    },

    {
        id: 6,
      name: "Entertainment",
      image:
        "img"
    },
  ];
  
  const getRandomCat = () => 
  categories[Math.floor(Math.random() * 6)]

  export {categories, getRandomCat} 


  

  
  