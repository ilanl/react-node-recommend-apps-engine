import React from "react";
import { safeHtml } from "../../common/helpers/SafeHtml";

const AppItem = ({ app, onSelect }) => {
  return (
    <a
      href="#"
      className="list-group-item list-group-item-action flex-column align-items-start"
      onClick={e => {
        e.stopPropagation();
        onSelect(app);
      }}
    >
      <div>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img
              src={app.icon}
              className="card-img"
              style={{ width: "170px", height: "auto" }}
              alt=""
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{safeHtml(app.name)}</h5>
              <p className="card-text">{app.category}</p>
              <p className="card-text">
                <small className="text-muted">rating: {app.rating}</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default AppItem;
