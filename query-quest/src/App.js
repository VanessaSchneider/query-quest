import React, { useState, useEffect } from 'react'
import NavBar from "./NavBar";
import Wheel from './Wheel'
import { Route, Switch } from "react-router-dom";
import './index.css'
import QuestionForm from './QuestionForm';
import Home from './Home';
import {categories} from "./category_data";
import Game from './Game';

function App() {
  const [questions, setQuestions]=useState([])
  const [randomCategory, setRandomCategory]=useState(false)
  const [correctAnswers, setCorrectAnswers] = useState(0)



  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((r) => r.json())
      .then((data) => {
        setQuestions(data)
      });
  }, []);


  function handleAddQuestion(newObj) {
      setQuestions([...questions, newObj]);  
  }
  



  function handleRandom(Obj){
    setRandomCategory(categories.filter((category)=>{return category===Obj}))
    }

return(


  <div>
    <h1>Query Quest</h1>
    <NavBar />
    <Switch>
        <Route path = "/game">
        <Game questions = {questions} category = {randomCategory} correctAnswers = {correctAnswers} 
        setCorrectAnswers= {setCorrectAnswers} />
        </Route>  
        <Route path="/playGame">
          <Wheel handleRandom={handleRandom} randomCategory={randomCategory} categories={categories}/>
          </Route>
        <Route path="/newQuestion">
          <QuestionForm handleAddQuestion={handleAddQuestion} />
        </Route>
        <Route path="/">
          <Home correctAnswers = {correctAnswers}/>
        </Route>
      </Switch>
  </div>
)
}

export default App;