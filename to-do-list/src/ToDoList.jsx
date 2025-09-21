function ToDoList() {
  return (
    <div>
      <h1>To-Do List</h1>

      <div>
        <input type="text" value="" placeholder="Enter a task..." />
        <button className="add-button">Add</button>
      </div>
      <ol>
        <li>
          <span className="text">{}</span>
          <button className="delete-button">Delete</button>
          <button className="move-button">⬆</button>
          <button className="move-button">⬇</button>
        </li>
      </ol>
    </div>
  );
}
export default ToDoList;
