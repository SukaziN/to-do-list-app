import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Shower",
    "Walk to daycare",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index) {
    const updateTasks = tasks.filter((t, i) => i !== index);
    setTasks(updateTasks);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...tasks];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTasks(updateTasks);
    }
  }

  function moveTaskDown(index) {
    const updateTasks = [...tasks];
    if (index !== -1 && index < updateTasks.length - 1) {
      const taskToMove = updateTasks[index];

      updateTasks[index] = updateTasks[index + 1];
      updateTasks[index + 1] = taskToMove;
      setTasks(updateTasks);
    }
  }

  return (
    <div className="to-do-list">
      <h1>To-Do List 🗒✍</h1>

      <div className="task-input">
        <input
          type="text"
          value={newTask}
          placeholder="Enter a task..."
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li className="task" key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              ⬆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              ⬇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
