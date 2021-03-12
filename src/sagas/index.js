import { put, takeLatest, all, select } from "redux-saga/effects";
const formaterData = (data, URLs) => {
  const newReturn = data?.result?.map((n) => {
    const m = n.split(/\s+/);
    return m.map((n) => {
      const tempt = n.split("_");
      return { kind: tempt[0], percent: tempt[1] };
    });
  });
  return URLs.map((url, index) => {
    return {
      url: url,
      return: newReturn[index],
    };
  });
};

const getItems = (state) => state.results.map((n) => n.url).filter((n) => n);

const isValidHttpUrl = (string) => {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

function* fetchNews() {
  const stateURL = yield select(getItems);
  console.log(!stateURL.length);
  if (!stateURL.length || stateURL.find((n) => !isValidHttpUrl(n))) {
    yield put({
      type: "ERROR_MESSAGE",
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
    const newRes = yield fetch(
      "http://localhost:8080/messages/",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        return formaterData(data, stateURL);
      });

    yield put({
      type: "CLASSI_RECEIVED",
      json: newRes,
    });
  }
}

function* actionWatcher() {
  yield takeLatest("GET_CLASSI", fetchNews);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
