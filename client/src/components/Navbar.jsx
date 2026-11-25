
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MyStore</Link>
        <div className="navbar-nav ms-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/about">About Us</Link>
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
