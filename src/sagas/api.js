import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: `${API_URL}`,
});

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const getClassification = (body) => {
  return instance
    .post("/messages", body)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
};
