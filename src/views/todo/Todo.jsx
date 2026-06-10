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
      const id = crypto.randomUUID();

      setTasks([...tasks, { text: inputValue, id, completed: false }]);
      console.log("die ID lautet:", id);
      //console.log("Add Task");
      setInputValue("");
    } else {
      alert("Bitte gib eine Aufgabe ein");
      //console.log("Input is empty");
    }
  }

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    //console.log("Delete Task");
  }

  function toggleTask(id) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });

    setTasks(newTasks);
  }

  return (
    <div className="app">
      <header className="app-header">
        To-do App
        <main className="<app-main">
          <input
            aria-label="Aufgabe eingeben"
            className="input"
            type="text"
            placeholder="z.B. einkaufen"
            onChange={saveInput}
            value={inputValue}
          />
          <Button text="ADD" onClick={addTask} className="button" />
        </main>
        <div className="todo-list">
          {tasks.length === 0 ? <p>No tasks yet!</p> : null}
          {tasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
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
