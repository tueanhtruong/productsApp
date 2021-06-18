import { put, takeLatest, all, select } from "redux-saga/effects";
import { ACTION_TYPE } from "../actions";
import { API_URL } from "./api";
import { formatterData, handleError, isValidHttpUrl } from "./helper";

const getItems = (state) => state.results.map((n) => n.url).filter((n) => n);

function* fetchNews() {
  const stateURL = yield select(getItems);
  if (!stateURL.length || stateURL.find((n) => !isValidHttpUrl(n))) {
    yield put({
      type: ACTION_TYPE.ERROR_MESSAGE,
      error: "Invalid URL",
    });
  } else {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        url: stateURL,
      }),
    };
    const storeAction = yield fetch(`${API_URL}/messages/`, requestOptions)
      .then(handleError)
      .then((response) => response.json())
      .then((data) => ({
        type: ACTION_TYPE.CLASSI_RECEIVED,
        json: formatterData(data, stateURL),
      }))
      .catch((err) => ({
        type: ACTION_TYPE.ERROR_MESSAGE,
        error: err.message,
      }));

    yield put(storeAction);
  }
}

function* actionWatcher() {
  yield takeLatest("GET_CLASSI", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
