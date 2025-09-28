import logo from "../assets/react.svg";
function Nav() {
  return (
    <nav className="container">
      <img src={logo} alt="" className="logo" />
      <h1>To-Do List</h1>
    </nav>
  );
}

export default Nav;
