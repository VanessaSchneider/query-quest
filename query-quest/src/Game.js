import Question from "./Question"
import React, { useState, useEffect } from "react";


function Game({questions, category}) {
    const [display, setDisplay] = useState(null)
    const [timeRemaining, setTimeRemaining] = useState(10);
    const [go, setGo] = useState(true)
    const [correct, setCorrect] = useState("")

    function answerKey() {

        if (correct === "") {
           return null
       }
       else if (correct === true ) { return <p>Correct!</p>}
       else if (correct === false) {return <p>Incorrect</p>}}


   
    


    useEffect(()=>{
        
       if(questions !== []){
           const newQuestions = questions.filter((question)=>{
               return question.category === category[0].name
           })

           function handle1(e){ (newQuestions[0].correctIndex === 1) ? setCorrect(true) : setCorrect(false)}
           function handle2(e){ (newQuestions[0].correctIndex === 2) ? setCorrect(true) : setCorrect(false)}
           function handle3(e){ (newQuestions[0].correctIndex === 3) ? setCorrect(true) : setCorrect(false)}
           function handle4(e){ (newQuestions[0].correctIndex === 4) ? setCorrect(true) : setCorrect(false)}
           

           setDisplay(

               <div>
               <p>{newQuestions[0].question}</p>
               <button onClick= {handle1}>{newQuestions[0].answers[0]}</button>
               <button onClick= {handle2}>{newQuestions[0].answers[1]}</button>
               <button onClick= {handle3}>{newQuestions[0].answers[2]}</button>
               <button onClick= {handle4}>{newQuestions[0].answers[3]}</button>
               </div>


        )
    }
    
 },[])



    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(timeRemaining !== 0){
            setTimeRemaining(()=>timeRemaining-1) }
        }, 1000)
        
        return function clearTimeout() {
            console.log("cleared")
            clearInterval(timeout)
        }
    },[timeRemaining])



    
    return(
        <div>
            <h1>Here's Your Question:</h1>
            {display}
            <p>{timeRemaining} Seconds Left</p>
          {answerKey()}
        </div>
    )
}

export default Game;