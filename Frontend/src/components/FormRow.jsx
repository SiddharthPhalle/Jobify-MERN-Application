import React from "react";

const FormRow = (props) => {
  const { type, id, name, isRequired, labelText, defaultValue, onChange } = props;
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        onChange={onChange}
        required={isRequired}
      />
    </div>
  );
};

export default FormRow;
