export const ACTION_TYPE = {
  GET_CLASSI: "GET_CLASSI",
  GET_CLASSIFICATION: "GET_CLASSIFICATION",
  ON_ADD_URL: "ON_ADD_URL",
  ON_DELETE_URL: "ON_DELETE_URL",
  ON_DELETE_ERROR: "ON_DELETE_ERROR",
  ERROR_MESSAGE: "ERROR_MESSAGE",
  CLASSI_RECEIVED: "CLASSI_RECEIVED",
  SET_LOADING: "SET_LOADING",
};

export const getClassification = (payload, onSuccess, onError) => {
  return {
    type: ACTION_TYPE.GET_CLASSIFICATION,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError,
  };
};
export const setLoading = (payload) => {
  return {
    type: ACTION_TYPE.SET_LOADING,
    payload: payload,
  };
};

export const errorMessage = (error) => {
  return {
    type: ACTION_TYPE.ERROR_MESSAGE,
    error: error,
  };
};
