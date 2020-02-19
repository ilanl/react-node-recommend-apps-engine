import React, { useContext, useState } from "react";
import { AppsActions, discoverApps } from "./logic/AppsActions";
import { AppContextProvider, AppContext } from "./logic/AppsContext";

import UserForm from "./views/preferences/UserForm";
import AppsView from "./views/apps/AppsView";

const withContext = Component => {
  class ComponentWithContext extends React.Component {
    render() {
      return (
        <AppContextProvider>
          <Component />
        </AppContextProvider>
      );
    }
  }
  return ComponentWithContext;
};

function App() {
  const { dispatch } = useContext(AppContext);
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = ({ age, categories, rating }) => {
    setBusy(true);
    setSent(true);
    console.log("will send", { age, categories, rating });
    discoverApps({ age, categories, rating })
      .then(apps => {
        dispatch({ type: AppsActions.GOT_RECOMMENDATIONS, apps });
      })
      .catch(e => console.error("TODO ERROR HANDLING", e))
      .finally(() => setBusy(false));
  };

  if (busy) {
    return <strong>Loading...</strong>;
  }
  return sent === false ? <UserForm onSubmit={onSubmit} /> : <AppsView />;
}

export default withContext(App);
