import "./Nav.css";
import logo from "../assets/react.svg";

function Nav() {
  return (
    <nav className="container">
      <div className="nav-content">
        <img src={logo} alt="" className="logo" />
        <h1>To-Do List</h1>
        <ul className="list">
          <li className="listitem">Add works</li>
          <li className="listitem">About project</li>
          <li className="listitem">
            <button className="btn">Contact me</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
