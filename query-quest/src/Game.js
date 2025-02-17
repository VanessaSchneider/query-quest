import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function Game({questions, category, correctAnswers, setCorrectAnswers, setStartNextQuest, startNextQuest}) {
    const [display, setDisplay] = useState(null)
    const [timeRemaining, setTimeRemaining] = useState(10);
    const [correct, setCorrect] = useState(null)
    const [answer, setAnswer] = useState(false)

    function toShow(){
        if (correct === null) {return null}
        else if (correct === true) {return <p>Correct</p>}
        else if (correct === false) {return <p>Sorry, Incorrect</p>}
    }

    function handleNextClick(e){
        setStartNextQuest((startNextQuest)=>!startNextQuest)
    }
   
    useEffect(()=>{
        if(timeRemaining === 0){
            setAnswer(true)
            setCorrect(false)
        }
       if(questions !== []){
           const newQuestions = questions.filter((question)=>{
               return question.category === category[0].name
           })

         const questionObj = newQuestions[Math.floor(Math.random() * (newQuestions.length))]
           console.log(questionObj)


           function handleClick(e) { 
               console.log(newQuestions[0].correctIndex)
               console.log(e.target.value)
               if (`${questionObj.correctIndex}` === e.target.value){
                    setCorrect(true)
                    console.log("correct")
                    setCorrectAnswers(correctAnswers + 1)
               }
               else {
                    setCorrect(false)
                    console.log("incorrect")
               }  
               setAnswer(true)
               console.log(answer)
            }

            setDisplay(
                <div>
                <p className = {answer ? "hidden" : null}>{questionObj.question}</p>
                <p className = {answer ? "hidden" : null} >
                    {<img src = {questionObj.imageLink}/>}</p>
                <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {1}>{questionObj.answers[0]}</button>
                <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {2}>{questionObj.answers[1]}</button>
                <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {3}>{questionObj.answers[2]}</button>
                <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {4}>{questionObj.answers[3]}</button>
                </div>
             )
           }
    
    },[answer])





    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(timeRemaining !== 0){
                setTimeRemaining(()=>timeRemaining-1)
            }
            else{
                setAnswer(true)
            }
        }, 1000)
        

        if(answer === true){
            clearTimeout(timeout)
        }
        
        return function clearTimeout() {
            clearInterval(timeout)
        }
    },[timeRemaining])


    
    return(
        <div>
            <br></br>
            <h1>Here's Your Question:</h1>
            {toShow()}
            <div className = {answer ? "block" : "hidden"}>
            <NavLink to="/playgame">
            <button> Next Question</button>
            </NavLink>
            <NavLink to="/home">
            <button>Check on the 👸</button>
            </NavLink>
            </div>
            {display}
            <p className = {answer ? "hidden" : null}>{timeRemaining} Seconds Left</p>
        </div>
    )
}


export default Game;