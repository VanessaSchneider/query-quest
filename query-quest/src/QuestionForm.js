import React, { useState } from "react";

      function QuestionForm({handleAddQuestion}) {
        const [question, setQuestion] = useState("");
        const [category, setCategory] = useState("");
        const [answers, setAnswers] = useState("");
        const [correctIndex, setCorrectIndex] = useState("");
        
      
      
        function handleQuestion(event) {
          setQuestion(event.target.value);
        }
      
        function handleCategory(event) {
          setCategory(event.target.value);
        }

        function handleAnswer(event) {
          setAnswers(event.target.value);
        }

        function handleIndex(event) {
          setCorrectIndex(event.target.value);
        }


        function handleSubmit(e) {
          e.preventDefault();
            const formData = {
               question: question,
                category: category,
                answers: [answers],
                correctIndex: parseInt(correctIndex),
              };

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
          <form onSubmit={handleSubmit}>

<select
      className="ui selection dropdown"
      name = "sort"
      onChange={handleCategory}
      value = {category}>
        <option value = "Entertainment">Entertainment</option>
        <option value = "Art">Art</option>
        <option value = "Pokemon">Pokemon</option>
        <option value = "History">History</option>
        <option value = "Science">Science</option>
  n      <option value = "Literature">Literature</option>
        </select>  
          <input type="text" placeholder="Type your question"  onChange={handleQuestion} value={question} />
          <input type="text" placeholder = "Type your answers" onChange={handleAnswer} value={answers} />
          <input type="text" placeholder = "Which answer is correct" onChange={handleIndex} value={correctIndex} />
          <button type="submit">Submit</button>
        </form>
        );
      }
  
  
  export default QuestionForm;