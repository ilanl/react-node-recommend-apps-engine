import React, { Fragment } from "react";

const NumberRange = ({ id, label, min, max, onChange, value }) => {
  return (
    <Fragment>
      <h4>{label}</h4>
      <div className="form-group">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          style={{ marginLeft: "10px" }}
          name={id}
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={e => onChange(e.target.value)}
        />
      </div>
    </Fragment>
  );
};

export default NumberRange;
