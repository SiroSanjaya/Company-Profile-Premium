import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="pt-16 lg:pt-20 min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-primary-600 mb-4">404</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
          The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
