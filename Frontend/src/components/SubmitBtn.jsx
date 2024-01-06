import React from "react";
import { useNavigation } from "react-router-dom";
import NAMES from "../NAMES";

const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && `form-btn`}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? NAMES.Submitting : NAMES.Submit}
    </button>
  );
};

export default SubmitBtn;
