
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center py-5">
      <h1 className="display-1 fw-bold">404</h1>
      <h2>Page Not Found</h2>
      <p>
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-wine">
        Back to Home
      </Link>
    </div>
  );
}
export default NotFound;
