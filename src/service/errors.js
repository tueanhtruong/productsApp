import { store } from "..";
import { errorMessage, setLoading } from "../actions";

export const errorHandle = (err) => {
  store.dispatch(setLoading(false));
  store.dispatch(errorMessage(err?.message || "Error Happen"));
};
