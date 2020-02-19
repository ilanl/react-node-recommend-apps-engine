import React, { createContext, useReducer } from "react";
import { AppsReducer } from "./AppsReducer";

export const AppContext = createContext();

export const AppContextProvider = props => {
  const [apps, dispatch] = useReducer(AppsReducer, []);

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
