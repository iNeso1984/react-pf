import React from "react";
import "./Portfolio.css";
import ProfileImage from "../images/me.jpg";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/Projects");
  }

  return (
    <>
    <header/>
      <div className="i">
        <div className="i-left">
          <div className="i-left-wrapper">
            <img src={ProfileImage} alt="developer" className="i-img" />
            <h2 className="i-intro">Hello, My name is </h2>
            <h1 className="i-name" id="name">
              Vanessa Withun
            </h1>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">Graphic Designer</div>
                <div className="i-title-item">Fine Artist</div>
              </div>
            </div>
            <div className="i-desc">
              <p>
                Creative front-end web developer interested in design,
                animation, and APIs.
              </p>
            </div>

            <button className="btn btn-gr" onClick={handleClick}>
              See Projects
            </button>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
        </div>
      </div>
    </>
  );
};

export default About;
