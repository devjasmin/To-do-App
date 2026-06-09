import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";

function TodoItem({ task, id, ToggleTask, DeleteTask }) {
  return (
    <div className="todo-item">
      <Checkbox
        onChange={() => ToggleTask(task.id)}
        className="checkbox"
      ></Checkbox>

      <div className="task">
        <span className={task.completed ? "strikethrough" : ""}>
          {task.text}
        </span>
      </div>

      <Button
        text="Delete"
        onClick={() => DeleteTask(task.id)}
        className="delete-button"
      />
    </div>
  );
}

export default TodoItem;
