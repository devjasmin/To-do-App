import Button from "../../../../components/button/Button";
import Checkbox from "../../../../components/checkbox/Checkbox";

function TodoItem({ task, index, ToggleTask, DeleteTask }) {
  return (
    <div className="todo-item">
      <Checkbox
        onChange={() => ToggleTask(index)}
        className="checkbox"
      ></Checkbox>

      <div className="task">
        <span className={task.completed ? "strikethrough" : ""}>
          {task.text}
        </span>
      </div>

      <Button
        text="Delete"
        onClick={() => DeleteTask(index)}
        className="delete-button"
      />
    </div>
  );
}

export default TodoItem;
