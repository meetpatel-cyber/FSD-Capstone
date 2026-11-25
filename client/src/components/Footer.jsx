import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="footer-brand">FSD Capstone</h5>
            <p className="mb-0">
              Discover products. Connect with us.
            </p>
          </div>

          <div className="col-md-6 text-md-end">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/about" className="footer-link">About</Link>
            <Link to="/contact" className="footer-link">Contact</Link>
          </div>
        </div>
        <hr className="footer-divider" />
        <p className="text-center mb-0 small">
          © {new Date().getFullYear()} FSD Capstone. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
