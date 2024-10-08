
import './App.css'
import { useState } from 'react';

function App() {
  
    const questions = [
      {
        question: "What is a variable in programming?",
        options: [
          "A fixed value that cannot change",
          "A storage location with a name",
          "A type of function",
          "A loop structure",
        ],
        answer: "A storage location with a name",
      },
      {
        question: "What is a function?",
        options: [
          "A block of code designed to perform a particular task",
          "A type of variable",
          "A collection of data",
          "A programming error",
        ],
        answer: "A block of code designed to perform a particular task",
      },
      {
        question: "What does 'asynchronous' mean in programming?",
        options: [
          "Code that executes sequentially",
          "Code that runs in parallel with other code",
          "A method of storing data",
          "A type of error",
        ],
        answer: "Code that runs in parallel with other code",
      },
      {
        question: "What is a loop?",
        options: [
          "A way to repeat a set of instructions",
          "A type of data structure",
          "A method of organizing functions",
          "A way to handle errors",
        ],
        answer: "A way to repeat a set of instructions",
      },
      {
        question: "What is a string in programming?",
        options: [
          "A type of number",
          "A collection of characters",
          "A way to define variables",
          "A programming concept for functions",
        ],
        answer: "A collection of characters",
      },
      {
        question: "What is debugging?",
        options: [
          "The process of writing code",
          "The practice of finding and fixing errors in code",
          "A way to organize data",
          "A type of software development",
          
        ],
        answer: "The practice of finding and fixing errors in code",
      }
    ];
  
    
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);
  
    
    const checkAnswer = (selectedOption) => {
      const currentQuestion = questions[index];
  
      if (selectedOption === currentQuestion.answer) {
        setScore(score + 10);
      }
  
   
      const nextIndex = index + 1;
      if (nextIndex < questions.length) {
        setIndex(nextIndex);
      } else {
        setIsCompleted(true);
      }
    };
  
    
    const renderQuiz = () => {
      const currentQuestion = questions[index];
      return (
        <div className="quiz">
          <h2>{currentQuestion.question}</h2>
          <div className="options">
            {currentQuestion.options.map((option, i) => (
              <button key={i} className="btn" onClick={() => checkAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      );
    };
  
    // Function to render quiz result
    const renderResult = () => {
      return (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your score is: {score}</p>
        </div>
      );
    };
  
    return (
      <div className="main">
        <h1>QUIZ</h1>
        {isCompleted ? renderResult() : renderQuiz()}
      </div>
    );
  }

  export default App;
  


