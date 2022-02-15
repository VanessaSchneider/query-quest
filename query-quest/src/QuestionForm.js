import React, { useState } from "react";

      function QuestionForm() {
        const [question, setQuestion] = useState("");
        const [category, setCategory] = useState("");
        const [answer, setAnswer] = useState("");
        
      
      
        function handleQuestion(event) {
          setQuestion(event.target.value);
        }
      
        function handleCategory(event) {
          setCategory(event.target.value);
        }

        function handleAnswer(event) {
          setAnswer(event.target.value);
        }


        function handleSubmit(e) {
          e.preventDefault();
            const formData = {
               question: question,
                category: category };
        }
      
        return (
          <form onSubmit={handleSubmit}>
          <input type="text"  onChange={handleQuestion} value={question} />
          <input type="text"  onChange={handleAnswer} value={answer} />
          <input type="text"  onChange={handleCategory} value={category} />
          <button type="submit">Submit</button>
        </form>
        );
      }
  
  
  export default QuestionForm;