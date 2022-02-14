import React from 'react'
import NavBar from "./NavBar";
import Wheel from './Wheel'
import { Route, Switch } from "react-router-dom";
import './index.css'
import QuestionForm from './QuestionForm';
import Home from './Home';

function App() {
return(
  <div>
    <NavBar />
    <Switch>
        <Route path="/playGame">
          <Wheel />
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