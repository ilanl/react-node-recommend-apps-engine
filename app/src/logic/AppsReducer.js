import { AppsActions } from "./AppsActions";

export const AppsReducer = (state, action) => {
  let newState;
  switch (action.type) {
    case AppsActions.GOT_RECOMMENDATIONS:
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
