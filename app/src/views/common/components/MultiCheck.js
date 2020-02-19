import React, { Fragment } from "react";

const MultiCheck = ({ id, label, items, selectedItems, onChange }) => {
  const onChecked = e => {
    let item = e.target.value;
    let newSelectedItems;
    if (e.target.checked === true) {
      console.log("selected", item);
      newSelectedItems = [...selectedItems, item];
    } else {
      console.log("un-selected", item);
      newSelectedItems = selectedItems.filter(element => element !== item);
    }
    onChange(newSelectedItems);
  };

  return (
    <Fragment>
      <h4>{label}</h4>
      <div className="multi-check form-group" id={id}>
        {items.map((item, i) => {
          let selected = selectedItems.includes(item) ? { checked: true } : {};
          return (
            <div className="form-check" key={i}>
              <input
                className="form-check-input"
                style={{ marginLeft: "0px" }}
                type="checkbox"
                value={item}
                id={i}
                {...selected}
                onClick={onChecked}
              />
              <label
                className="form-check-label"
                htmlFor={i}
                style={{ marginLeft: "20px" }}
              >
                {item}
              </label>
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};

export default MultiCheck;
