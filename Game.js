import Question from "./Question"
import React, {useState, useEffect} from "react";


function Game({ category}) {
    const [questions, setQuestions] = useState([])
    let filteredQuestions;

    useEffect(()=>{
        fetch("http://localhost:8003/questions")
        .then((r) => r.json())
        .then((data) => {
            setQuestions(data)
            filteredQuestions = questions.filter((question)=>{
            return category[0]["name"] === question.category
            })
        });
        },[])



    return(
        <div>
        <Question />
        </div>
    )
}

export default Game;