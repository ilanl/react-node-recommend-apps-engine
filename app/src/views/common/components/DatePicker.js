import React, { Fragment } from "react";

// Local issues (use a component ready)

const DatePicker = ({ value, id, label, onChange }) => {
  return (
    <Fragment>
      <h4>{label}</h4>
      <div className="form-group">
        <input
          className="form-control"
          style={{ width: "80%" }}
          id={id}
          type="date"
          value={value}
          onChange={e => {
            if (e.target.value && Date.parse(e.target.value)) {
              onChange(e.target.value);
            }
          }}
          aria-describedby="dateHelp"
        />
        <small id="dateHelp" className="form-text text-muted">
          Enter your date of birth following the above format.
        </small>
      </div>
    </Fragment>
  );
};

export default DatePicker;
