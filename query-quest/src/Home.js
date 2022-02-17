import castle from "./castle.jpeg"
function Home({correctAnswers}) {

    return (

      <div>
     
      <img className = "size" src= {(correctAnswers < 5) ? castle : "https://previews.123rf.com/images/tigatelu/tigatelu1410/tigatelu141000114/33366882-cartoon-knight-princess-and-dragon.jpg"}  alt="picture"/>
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