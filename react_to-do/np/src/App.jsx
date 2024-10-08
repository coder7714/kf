
import './App.css'

import { useState, useEffect } from "react";

function App() {


    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
  
    useEffect(() => {
      // Retrieve saved data from localStorage on mount
      const savedData = localStorage.getItem("data");
      if (savedData) {
        setTaskList(JSON.parse(savedData));
      }
    }, []);
  
    useEffect(() => {
      // Save data to localStorage when taskList changes
      localStorage.setItem("data", JSON.stringify(taskList));
    }, [taskList]);
  
    const addTask = () => {
      if (task === '') {
        alert('you must write something!');
      } else {
        setTaskList([...taskList, { task, completed: false }]);
        setTask("");
      }
    };
  
    const toggleTask = (index) => {
      const updatedTaskList = [...taskList];
      updatedTaskList[index].completed = !updatedTaskList[index].completed;
      setTaskList(updatedTaskList);
    };
  
    const removeTask = (index) => {
      const updatedTaskList = taskList.filter((_, i) => i !== index);
      setTaskList(updatedTaskList);
    };
  
    return (
      <div className="container">
        <div className="to-do_app">
          <h2>To-Do List <img src="./assets/images/to-do.jpg" alt="To-Do" /></h2>
          <div className="row">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter your task here"
            />
            <button onClick={addTask}>Add</button>
          </div>
          <ul className="list-container">
            {taskList.map((item, index) => (
              <li
                key={index}
                className={item.completed ? "checked" : ""}
                onClick={() => toggleTask(index)}
              >
                {item.task}
                <span onClick={() => removeTask(index)}>&#x00D7;</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  

export default App;
  
  
  

 
  


