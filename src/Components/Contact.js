import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  function backClick() {
    navigate("/About");
  }
  return (
    <div>
      <h1>Contact</h1>
      <button className="btn btn-gr" onClick={backClick}>
        Back
      </button>
    </div>
  );
};

export default Contact;
