import React, { useState, useEffect, useContext } from "react";
import AppsList from "./components/AppsList";
import AppDetails from "./components/AppDetails";
import { AppContext } from "../../AppContext";

const AppsView = () => {
  const { apps } = useContext(AppContext);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    console.log("selected", selected);
  }, [selected]);

  const onSelect = app => {
    setSelected(app);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6">
          <AppsList onSelect={onSelect} selected={selected} apps={apps} />
        </div>
        <div className="col-6">
          <AppDetails app={selected} />
        </div>
      </div>
    </div>
  );
};

export default AppsView;
