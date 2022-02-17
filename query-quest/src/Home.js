import castle from "./castle.jpeg"
function Home() {

    return (

      <div>
     
      <img className = "size" src= {castle}  alt="picture"/>
      <div className = "castleTile">
        
       <p> The princess needs your help! She is locked in the tower. </p> 
       <p> She will only be released if you can answer 5 trivia questions correctly. </p> 
          

      </div>
      
      </div>
    )
  }
  
  export default Home;