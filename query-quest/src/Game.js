import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";


function Game({questions, category}) {
    const [display, setDisplay] = useState(null)
    const [timeRemaining, setTimeRemaining] = useState(10);
    const [go, setGo] = useState(true)
    const [correct, setCorrect] = useState(null)
    const [answer, setAnswer] = useState(false)
    const [numberCorrect, setNumberCorrect]=useState(0)

   function Increment() {
   if(correct === true)  {setNumberCorrect((numberCorrect)=> numberCorrect +1)}
   else {setNumberCorrect(numberCorrect) }
    return <p> You currently have {numberCorrect} correct</p>
}
    function toShow(){
        if (correct === null) {return null}
        else if (correct === true) {return <p>Correct</p>}
        else if (correct === false) {return <p>Sorry, Incorrect</p>}
    }
   

    useEffect(()=>{
       if(questions !== []){
           const newQuestions = questions.filter((question)=>{
               return question.category === category[0].name
           })


           function handleClick(e) { 
                


               if (newQuestions[0].correctIndex == e.target.value){
                    setAnswer(true)
                    setCorrect(true)
                    console.log("correct")
               }
               else {
                    setAnswer(true)
                    setCorrect(false)
                    console.log("incorrect")
               }  
               
            }

           function handle1(e){ (newQuestions[0].correctIndex === 1) ? setCorrect(true) : setCorrect(false)}
           function handle2(e){ (newQuestions[0].correctIndex === 2) ? setCorrect(true) : setCorrect(false)}
           function handle3(e){ (newQuestions[0].correctIndex === 3) ? setCorrect(true) : setCorrect(false)}
           function handle4(e){ (newQuestions[0].correctIndex === 4) ? setCorrect(true) : setCorrect(false)}
           
           setDisplay(
               <div>
               <p>{newQuestions[0].question}</p>
               <p>{<img src = {newQuestions[0].imageLink}/>}</p>
               <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {1}>{newQuestions[0].answers[0]}</button>
               <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {2}>{newQuestions[0].answers[1]}</button>
               <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {3}>{newQuestions[0].answers[2]}</button>
               <button onClick= {handleClick} className = {answer ? "hidden" : null} value = {4}>{newQuestions[0].answers[3]}</button>
               </div>
            )
        }
    
    },[answer])



    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(timeRemaining !== 0){
                setTimeRemaining(()=>timeRemaining-1)
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
            <h1>Here's Your Question:</h1>
            {display}
            <p className = {answer ? "hidden" : null}>{timeRemaining} Seconds Left</p>
            {toShow()}
            <NavLink to="/playgame">
            <button>Next Question</button>
            </NavLink>
        </div>
    )
}


export default Game;