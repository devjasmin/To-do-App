import { useState } from "react";
import Button from "../../components/button/Button";
//import Checkbox from "../../components/checkbox/Checkbox";
import TodoItem from "./components/todoItem/TodoItem";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function saveInput(event) {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  }

  function addTask() {
    if (inputValue !== "") {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      console.log("Add Task");
      setInputValue("");
    } else {
      alert("Bitte gib eine Aufgabe ein");
      console.log("Input is empty");
    }
  }

  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
    console.log("Delete Task");
  }

  function toggleTask(index) {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
    //console.log("Toggle Task");
  }
  return (
    <div className="app">
      <header className="app-header">
        To-do App
        <main className="<app-main">
          <input
            className="input"
            type="text"
            placeholder="Aufgabe eingeben..."
            onChange={saveInput}
            value={inputValue}
          />
          <Button text="ADD" onClick={addTask} className="button" />
        </main>
        <div className="todo-list">
          {tasks.length === 0 ? <p>No tasks yet!</p> : null}
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              DeleteTask={deleteTask}
              ToggleTask={toggleTask}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Todo;
