import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function SaveInput(event) {
    setInputValue(event.target.value);
    console.log(event.target.value);
  }

  function AddTask() {
    if (inputValue !== "") {
      setTasks([...tasks, inputValue]);
      console.log("Add Task");
      setInputValue("");
    } else {
      console.log("Input is empty");
    }
    tasks.map((task) => {
      console.log(task.length);
    });
  }

  function DeleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
    console.log("Delete Task");
  }

  return (
    <div className="App">
      <header className="App-header">
        To-do App
        <main className="App-main">
          <input
            className="input"
            type="text"
            placeholder="Aufgabe eingeben..."
            onChange={SaveInput}
            value={inputValue}
          />
          <button onClick={AddTask} className="button">
            Add
          </button>
        </main>
        <div className="todo-list">
          {tasks.map((task, index) => (
            <div key={index} className="todo-item">
              <div className="checkbox">[ ]</div>
              <div className="task">{task}</div>
              <button
                onClick={() => DeleteTask(index)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
