import React from "react";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import NAMES from "../NAMES";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Track <span>Your</span> Job
          </h1>
          <p>{NAMES.LandingPageDescription}</p>
          <Link to="/register" className="btn register-link">
            {NAMES.Register}
          </Link>
          <Link to="/login" className="btn">
            {NAMES.Login}
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
