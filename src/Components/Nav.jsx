import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
