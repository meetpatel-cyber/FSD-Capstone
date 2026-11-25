import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2>Page Not Found</h2>
      <p className="text-muted">
        Page not exist !!
      </p>
      <Link to="/" className="btn btn-primary mt-3">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
