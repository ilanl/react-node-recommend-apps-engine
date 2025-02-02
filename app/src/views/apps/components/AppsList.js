import React from "react";
import AppItem from "./AppItem";

/*
<div className="list-group">
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>
    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small>Donec id elit non mi porta.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small className="text-muted">Donec id elit non mi porta.</small>
  </a>
  <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
    <div className="d-flex w-100 justify-content-between">
      <h5 className="mb-1">List group item heading</h5>
      <small className="text-muted">3 days ago</small>
    </div>
    <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
    <small className="text-muted">Donec id elit non mi porta.</small>
  </a>
</div>
*/

const AppsList = ({ apps, selected, onSelect }) => {
  return (
    <div className="list-group">
      {apps.map(app => {
        return (
          <AppItem
            key={app.id}
            app={app}
            isSelected={selected === app}
            onSelect={onSelect}
          />
        );
      })}
    </div>
  );
};

export default AppsList;
