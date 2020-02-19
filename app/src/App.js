import React, { useContext, useState } from "react";

import {
  ActionTypes,
  withContext,
  AppContext,
  discoverApps
} from "./AppContext";
import UserForm from "./screens/register/UserForm";
import AppsView from "./screens/apps/AppsView";

function App() {
  const { dispatch } = useContext(AppContext);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = ({ age, categories, rating }) => {
    setBusy(true);
    setSent(true);
    console.log("will send", { age, categories, rating });
    discoverApps({ age, categories, rating }).then(apps => {
      dispatch({ type: ActionTypes.GOT_RECOMMENDATIONS, apps });
      setBusy(false);
    });
  };

  if (busy) {
    return (
      <div class="d-flex align-items-center">
        <strong>Loading...</strong>
        <div
          class="spinner-border ml-auto"
          role="status"
          aria-hidden="true"
        ></div>
      </div>
    );
  }

  return sent === false ? <UserForm onSubmit={onSubmit} /> : <AppsView />;
}

export default withContext(App);
