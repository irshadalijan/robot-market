import axios from "axios";
import { apiBaseUrl, END_LOADING } from "./appConstants";

export default function useCallApi(
  param: string,
  dispatchType: string,
  dispatchFunc: any
) {
  const apiCall = axios.create({
    baseURL: apiBaseUrl,
  });

  apiCall
    .get(param)
    .then((res) => {
      dispatchFunc({
        type: dispatchType,
        payload: res.data.data,
      });
      dispatchFunc({
        type: END_LOADING,
      });
    })
    .catch((e) => console.log("error", e));
}
