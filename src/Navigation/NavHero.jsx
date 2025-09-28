import React, { useState } from "react";
import "./NavHero.css";
import heroImage from "../assets/hero.png";
import logo from "../assets/react.svg";

function NavHero() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editId, setEditId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* Menu Items */}
          <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
            <li className="listitem">
              <a href="#home">Home</a>
            </li>
            <li className="listitem">
              <a href="#about">About</a>
            </li>
            <li className="listitem">
              <button>
                <a href="#contact">Contact</a>
              </button>
            </li>
          </ul>

          {/* Hamburger */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <img src={heroImage} alt="Hero" className="hero-img" />
        <div className="hero-overlay">
          <h1>Organize Your Life</h1>
          <p>Manage your tasks efficiently with this simple To-Do App</p>
          <button>
            <a href="#add"> Add Task Below</a>
          </button>
        </div>
      </section>

      {/* To-Do Section */}
      <section className="todo-section">
        <h2 id="add">Your Tasks</h2>
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

      <section id="about" className="about-section">
        <h2>About This App</h2>
        <p>
          This is my very first application built using React! I created this
          To-Do App to practice and understand the basics of React. In this
          project, I learned how to use React components, manage state using{" "}
          <strong>useState</strong>, handle events, and create dynamic,
          interactive UI.
        </p>
        <p>
          I divided my app into multiple sections: a <strong>Navbar</strong> for
          navigation, a <strong>Hero</strong> section with an image and overlay
          text, a <strong>To-Do</strong> section where users can add, edit,
          delete, and complete tasks, and finally a <strong>Contact</strong>{" "}
          section with my social links.
        </p>
        <p>
          This project helped me understand React concepts like component
          hierarchy, passing props, conditional rendering, and responsive
          design. It also taught me how to combine CSS with React for styling
          and handle mobile responsiveness with a hamburger menu.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aditya-kumar-sah-4a343a312/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:sahadityakumarr@gmail.com">Email</a>
        </div>
      </section>
    </div>
  );
}

export default NavHero;
