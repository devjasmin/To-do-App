import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        To-do App
        <main className="App-main">
          <input className="input" type="text" placeholder="Aufgabe eingeben" />
          <button className="button">Add</button>
        </main>
        <div className="todo-list">
          <div className="checkbox">[ ]</div>
          <div className="task">
            <div className="task-items">Aufgabe 1</div>
          </div>
          <button className="delete-button">Delete</button>
        </div>
      </header>
    </div>
  );
}

export default App;
