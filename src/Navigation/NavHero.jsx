import React, { useState } from "react";
import "./NavHero.css";
import heroImage from "../assets/hero.png";
import logo from "../assets/react.svg";

function NavHero() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);

  const addTask = () => {
    if (!task.trim()) return;

    if (editId) {
      setTasks(tasks.map((t) => (t.id === editId ? { ...t, text: task } : t)));
      setEditId(null);
    } else {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    }
    setTask("");
  };

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const toggleComplete = (id) =>
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const editTask = (id) => {
    const t = tasks.find((t) => t.id === id);
    setTask(t.text);
    setEditId(id);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="nav-container">
        <div className="nav-content">
          <img src={logo} alt="Logo" className="logo" />
          <h1>To-Do App</h1>
          <ul className="nav-list">
            <li className="listitem">Home</li>
            <li className="listitem">About</li>
            <li className="listitem">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <img src={heroImage} alt="Hero" className="hero-img" />
        <div className="hero-overlay">
          <h1>Organize Your Life</h1>
          <p>Manage your tasks efficiently with this simple To-Do App</p>
          <button>Add Task Below</button>
        </div>
      </section>

      {/* To-Do Section */}
      <section className="todo-section">
        <h2>Your Tasks</h2>
        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>
            {editId ? "Update Task" : "Add Task"}
          </button>
        </div>
        <ul className="task-list">
          {tasks.map((t) => (
            <li key={t.id} className={t.completed ? "completed" : ""}>
              <span onClick={() => toggleComplete(t.id)}>{t.text}</span>
              <div className="task-buttons">
                <button onClick={() => editTask(t.id)}>✏️</button>
                <button onClick={() => deleteTask(t.id)}>❌</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default NavHero;
