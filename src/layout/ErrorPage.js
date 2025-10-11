import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1 className="error-title">Oops!</h1>
      <p className="error-message">Sorry, an unexpected error occurred.</p>
      <p className="error-details">
        <i>{error.statusText || error.message || "Unknown error"}</i>
      </p>
      <Link to="/" className="error-home-btn">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
