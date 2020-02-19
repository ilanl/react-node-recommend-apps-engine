import React from "react";
import { safeHtml } from "../../common/helpers/SafeHtml";

const AppDetails = ({ app }) => {
  if (!app) {
    return <h6>No selected item</h6>;
  }
  console.log(app.name, app.id);

  return (
    <div className="container">
      <div className="row">
        <h2 className="card-title">{safeHtml(app.name)}</h2>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="card-text">
            <small className="text-muted">Restricted: {app.min_age}</small>
          </p>
        </div>
        <div className="col-6">
          <p className="card-text">
            <small className="text-muted">
              Installed: {app.install_count} times
            </small>
          </p>
        </div>
      </div>
      <div className="row" style={{ marginTop: "25px" }}>
        <p className="card-text">{safeHtml(app.description)}</p>
      </div>
    </div>
  );
};

export default AppDetails;
