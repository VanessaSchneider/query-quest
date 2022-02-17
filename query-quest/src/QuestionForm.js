

import React, { useState } from "react";

function QuestionForm({handleAddQuestion}) {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [answers1, setAnswers1] = useState("");
  const [answers2, setAnswers2] = useState("");
  const [answers3, setAnswers3] = useState("");
  const [answers4, setAnswers4] = useState("");
  const [correctIndex, setCorrectIndex] = useState("");
  const theRandomNumber = (Math.floor(Math.random() * 10000000000) + 1);


  function handleQuestion(event) {
    setQuestion(event.target.value);
  }

  function handleCategory(event) {
    setCategory(event.target.value);
  }

  function handleAnswer1(event) {
    setAnswers1(event.target.value);
  }
  function handleAnswer2(event) {
    setAnswers2(event.target.value);
  }
  function handleAnswer3(event) {
    setAnswers3(event.target.value);
  }
  function handleAnswer4(event) {
    setAnswers4(event.target.value);
  }

  function handleIndex(event) {
    setCorrectIndex(event.target.value);
  }



  function handleSubmit(e) {
    e.preventDefault();



      const formData = {
          id: theRandomNumber,
         question: question,
          category: category,
          answers: [answers1, answers2, answers3, answers4],
          correctIndex: parseInt(correctIndex),
        };

        e.formReset()
        
  fetch("http://localhost:3000/questions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    
  handleAddQuestion(formData);
  }

  return (
    <div className="lowerSpace">
    <form onSubmit={handleSubmit}>

<select
className="ui selection dropdown"
name = "sort"
onChange={handleCategory}
value = {category}>
  <option value="" disabled selected hidden>Choose category </option>
  <option value = "Entertainment">Entertainment</option>
  <option value = "Art">Art</option>
  <option value = "Pokemon">Pokemon</option>
  <option value = "History">History</option>
  <option value = "Science">Science</option>
n      <option value = "Literature">Literature</option>
  </select>  
    <div >
      <input type="text" className = "typeQuestion" placeholder="Type your question"  onChange={handleQuestion} value={question} />
      </div>
    <div>
    <input type="text" placeholder = "1. Type your answer options" onChange={handleAnswer1} value={answers1} />
    <input type="text" placeholder = "2. Type your answer options" onChange={handleAnswer2} value={answers2} />
    <input type="text" placeholder = "3. Type your answer options" onChange={handleAnswer3} value={answers3} />
    <input type="text" placeholder = "4. Type your answer options" onChange={handleAnswer4} value={answers4} />
    </div>
    <select
className="ui selection dropdown"
name = "sort"
onChange={handleIndex}
value = {correctIndex}
>
  <option value="" disabled selected hidden>Choose correct answer </option>
  <option value = {1}>1</option>
  <option value = {2}>2</option>
  <option value = {3}>3</option>
  <option value = {4}>4</option>
  </select>
    <button type="submit">Submit</button>
  </form>
  </div>
  );
}


export default QuestionForm;