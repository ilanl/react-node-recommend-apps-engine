import axios from "axios";
import { REACT_APP_SERVER_URL } from "../Constants";

export const AppsActions = {
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
