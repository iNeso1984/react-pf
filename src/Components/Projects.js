import React from "react";
import "./Projects.css";
// import PrevNextBtns from './PrevNextBtns';
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Contact");
  }
  function backClick() {
    navigate("/About");
  }
  return (
    <>
      <h1>Projects</h1>
      <div className="project-wrapper">
        <div class="row">
          <div class="column">Project 1</div>
          <div class="column">Project 2</div>
          <div class="column">Project 3</div>
        </div>
        <div className="container">
          <button className="btn btn-gr" onClick={backClick}>
            Back
          </button>
          <button className="btn btn-gr" onClick={handleClick}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
