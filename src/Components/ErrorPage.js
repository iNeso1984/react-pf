import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Error! Page Not Found!</h1>
      <button
        className="btn btn-gr"
        onClick={() => navigate("/", { approved: true })}
      >
        Go Back
      </button>
    </div>
  );
}

export default ErrorPage;
