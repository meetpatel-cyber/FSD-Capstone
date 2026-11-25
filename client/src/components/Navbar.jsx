
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand navbar-dark site-navbar">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          <span className="brand-mark">F</span>
          FSD Capstone
        </Link>

        <div className="navbar-nav ms-auto flex-row">
          <NavLink className="nav-link" to="/" end>
            Home
          </NavLink>

          <NavLink className="nav-link" to="/about">
            About
          </NavLink>

          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
