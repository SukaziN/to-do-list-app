function ToDoList() {
  return (
    <div className="to-do-list">
      <h1>To-Do List 🗒✍</h1>

      <div className="task-input">
        <input type="text" value="" placeholder="Enter a task..." />
        <button className="add-button">Add</button>
      </div>
      <ol>
        <li className="task">
          <label htmlFor="check-mark" className="custom-checkbox">
            <input type="checkbox" id="check-mark" />
            <span className="checkmark"></span>
          </label>
          <span className="text">Go for a jog</span>
          <button className="delete-button">Delete</button>
          <button className="move-button">⬆</button>
          <button className="move-button">⬇</button>
        </li>
      </ol>
    </div>
  );
}
export default ToDoList;
