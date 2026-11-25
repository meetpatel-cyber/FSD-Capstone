
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found-page">
      <div className="container text-center">
        <span className="section-label">PAGE NOT FOUND</span>
        <h1>404</h1>
        <h2>Oops! Lost your way?</h2>
        <p>
          The page you're looking for doesn't exist
          or may have been moved.
        </p>
        <Link to="/" className="btn btn-rose">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
