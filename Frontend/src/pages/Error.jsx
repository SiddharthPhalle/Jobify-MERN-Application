import React from "react";
import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import NAMES from "../NAMES";

const Error = () => {
  const error = useRouteError();
  const returnElement =
    error.status === 404 ? (
      <div>
        <img src={img} alt="not found" />
        <h3>{NAMES.PageNotFound}</h3>
        <p>{NAMES.ErrorDescription}</p>
        <Link to="/dashboard">{NAMES.Back}</Link>
      </div>
    ) : (
      <div>
        <h1>{NAMES.ErrorWrongURL}</h1>
      </div>
    );
  return <Wrapper>{returnElement}</Wrapper>;
};

export default Error;
