import axios from "axios";
import React, { createContext, useReducer } from "react";
import { REACT_APP_SERVER_URL } from "./Constants";

export const AppContext = createContext();

export const withContext = Component => {
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

export const ActionTypes = {
  GOT_RECOMMENDATIONS: "GOT_RECOMMENDATIONS"
};

export const discoverApps = async ({ age, categories, rating }) => {
  let { data } = await axios.post(`${REACT_APP_SERVER_URL}/apps/discover`, {
    age,
    categories,
    rating
  });
  return data;
};

export const reducer = (state, action) => {
  let newState;
  switch (action.type) {
    case ActionTypes.GOT_RECOMMENDATIONS:
      newState = [...action.apps];
      break;
    default:
      newState = state;
  }

  if (newState !== state) {
    console.log("action:", action.type, "->", newState);
  }

  return newState;
};

export const AppContextProvider = props => {
  const [apps, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider
      value={{
        apps,
        dispatch
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
