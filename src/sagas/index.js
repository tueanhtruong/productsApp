import { takeLatest, all, call, fork } from "redux-saga/effects";
import { store } from "..";
import { ACTION_TYPE, setLoading } from "../actions";

import * as APIS from "./api";

function handler(action, response, error, successCallback, errorCallback) {
  if (response) {
    if (
      (response.status === 200 || response.status === 204) &&
      successCallback
    ) {
      successCallback(response.data);
    }
  } else if (errorCallback && error) {
    errorCallback(error);
  }
}

function* getClassification(action) {
  store.dispatch(setLoading(true));

  const { response, error } = yield call(
    APIS.getClassification,
    action.payload
  );
  handler(action, response, error, action.onSuccess, action.onError);
  store.dispatch(setLoading(false));
}

function* getClassificationWatcher() {
  yield takeLatest(ACTION_TYPE.GET_CLASSIFICATION, getClassification);
}

export default function* rootSaga() {
  yield all([fork(getClassificationWatcher)]);
}
