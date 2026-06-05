import { useState } from "react";
import Button from "../../components/button/Button";
//import Checkbox from "../../components/checkbox/Checkbox";
import TodoItem from "./components/todoItem/TodoItem";

function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function SaveInput(event) {
    setInputValue(event.target.value);
    // console.log(event.target.value);
  }

  function AddTask() {
    if (inputValue !== "") {
      setTasks([...tasks, { text: inputValue, completed: false }]);
      console.log("Add Task");
      setInputValue("");
    } else {
      alert("Bitte gib eine Aufgabe ein");
      console.log("Input is empty");
    }
    tasks.map((task) => {
      //console.log(task.length);
    });
  }

  function DeleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
    console.log("Delete Task");
  }

  function ToggleTask(index) {
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
          <Button text="ADD" onClick={AddTask} className="button" />
        </main>
        <div className="todo-list">
          {tasks.length === 0 ? <p>No tasks yet!</p> : null}
          {tasks.map((task, index) => (
            <TodoItem
              key={index}
              task={task}
              index={index}
              DeleteTask={DeleteTask}
              ToggleTask={ToggleTask}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default Todo;
