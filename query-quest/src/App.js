import React, { useState } from 'react'
import NavBar from "./NavBar";
import Wheel from './Wheel'
import { Route, Switch } from "react-router-dom";
import './index.css'
import QuestionForm from './QuestionForm';
import Home from './Home';
import {categories} from "./category_data";

function App() {
 
  const [randomCategory, setRandomCategory]=useState(false)

  function handleRandom(Obj){
    setRandomCategory(categories.filter((category)=>{return category===Obj}))
    console.log(randomCategory)
    }

return(


  <div>
    <h1>Query Quest</h1>
    <NavBar />
    <Switch>
        <Route path="/playGame">
          <Wheel handleRandom={handleRandom} randomCategory={randomCategory} categories={categories}/>
          </Route>
        <Route path="/newQuestion">
          <QuestionForm />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </div>
)
}

export default App