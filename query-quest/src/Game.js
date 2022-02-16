import Question from "./Question"
import React, { useState, useEffect } from "react";


function Game({questions, category}) {
    const [display, setDisplay] = useState(null)
    const [timeRemaining, setTimeRemaining] = useState(10);
    const [go, setGo] = useState(true)

    useEffect(()=>{
        
       if(questions !== []){
           const newQuestions = questions.filter((question)=>{
               return question.category === category[0].name
           })
           setDisplay(
               <div>
               <p>{newQuestions[0].question}</p>
               <button>{newQuestions[0].answers[0]}</button>
               <button>{newQuestions[0].answers[1]}</button>
               <button>{newQuestions[0].answers[2]}</button>
               <button>{newQuestions[0].answers[3]}</button>
               </div>
           )
       }

       
       
    },[])
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(timeRemaining !== 0){
            setTimeRemaining(()=>timeRemaining-1)
        }
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
        </div>
    )
}

export default Game;