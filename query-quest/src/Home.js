import castle from "./castle.jpeg"
import mush1 from "./1mushroom.jpg"
import mush2 from "./2mushrooms.png"
import mush3 from "./3mushrooms.png"
import mush4 from "./4mushrooms.png"
import mush5 from "./5mushrooms.png"
function Home({correctAnswers}) {

  const imgLink = "https://previews.123rf.com/images/tigatelu/tigatelu1410/tigatelu141000114/33366882-cartoon-knight-princess-and-dragon.jpg"

  function picturesToShow(){
    if (correctAnswers === 0){return <img src = {castle} className = "size" alt = "image" />}
    else if (correctAnswers === 1){return <img src= {mush1} className = "size" alt = "image"/>}
    else if (correctAnswers === 2){return <img src= {mush2} className = "size" alt = "image"/>}
    else if (correctAnswers === 3){return <img  src= {mush3} className = "size" alt = "image"/>}
    else if (correctAnswers === 4){return <img  src= {mush4} className = "size" alt = "image"/>}
    else if (correctAnswers === 5){return <img src= {mush5} className = "size" alt = "image"/>}
    else if (correctAnswers > 5) {return <img src = {imgLink} className = "size" alt = "image"/>}
      }
    
      
        return (
    
  <div>    
      {picturesToShow()}
      
      <div className = "castleTile">
        
        <p> The princess needs your help! She is locked in the tower. </p> 
        <p> She will only be released if you can answer 5 trivia questions correctly. </p> 
        <br/>
        <p>Correct Answers: {correctAnswers}</p>
          

      </div>
      
 </div>
    )
  }
  
  export default Home;