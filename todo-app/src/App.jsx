
import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1" },
    { id: 2, title: "Task 2" },
  ]);

  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  // CREATE and UPDATE
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    if (editId !== null) {
      setTasks((prev) =>
        prev.map((item) =>
          item.id === editId
            ? { ...item, title: task.trim() }
            : item
        )
      );
      setEditId(null);
    } else {
      setTasks((prev) => [
        ...prev,
        { id: Date.now(), title: task.trim() },
      ]);
    }

    setTask("");
  };

  // EDIT
  const handleEdit = (item) => {
    setTask(item.title);
    setEditId(item.id);
  };

  // DELETE
  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));

    if (editId === id) {
      setTask("");
      setEditId(null);
    }
  };

  // READ: Display tasks
  return (
    <main className="container">
      <h1>Todo List</h1>
      <p className="subtitle">Vite + React | CRUD Operations</p>

      <form className="input-section" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button className="add-btn" type="submit">
          {editId !== null ? "Update" : "Add"}
        </button>
      </form>

      {tasks.length === 0 ? (
        <p className="empty">No tasks yet. Add a task!</p>
      ) : (
        <ul className="task-list">
          {tasks.map((item) => (
            <li key={item.id} className="task-item">
              <span>{item.title}</span>

              <div className="actions">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <p className="count">Total Tasks: {tasks.length}</p>
    </main>
  );
}

export default App;
