import React, { useState } from "react";

      function QuestionForm({handleAddQuestion}) {
        const [question, setQuestion] = useState("");
        const [category, setCategory] = useState("");
        const [answers1, setAnswers1] = useState("");
        const [answers2, setAnswers2] = useState("");
        const [answers3, setAnswers3] = useState("");
        const [answers4, setAnswers4] = useState("");
        const [correctIndex, setCorrectIndex] = useState("");
        
      
      
        function handleQuestion(event) {
          setQuestion(event.target.value);
        }
      
        function handleCategory(event) {
          setCategory(event.target.value);
        }

        function handleAnswer1(event) {
          setAnswers(event.target.value);
        }
        function handleAnswer2(event) {
          setAnswers(event.target.value);
        }
        function handleAnswer3(event) {
          setAnswers(event.target.value);
        }
        function handleAnswer4(event) {
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

        fetch("http://localhost:8003/questions", {
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
              <div className="catTile ui card">
                <div>
          <select
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
          <input type="text" placeholder="Type your question"onChange={handleQuestion} value={question} />
          </div>
          </div>
          <div className="index">
            <div>
          <input type="text" placeholder = "Type your answers" onChange={handleAnswer1} value={answers} />
          <input type="text" placeholder = "Type your answers" onChange={handleAnswer2} value={answers} />
          <input type="text" placeholder = "Type your answers" onChange={handleAnswer3} value={answers} />
          <input type="text" placeholder = "Type your answers" onChange={handleAnswer4} value={answers} />
          </div>
          </div>
          <input type="text" placeholder = "Which answer is correct" onChange={handleIndex} value={correctIndex} />
          <button type="submit">Submit</button>
        </form>
        );
      }
  
  
  export default QuestionForm;