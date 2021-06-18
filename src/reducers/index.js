import { ACTION_TYPE } from "../actions";

const INITIAL_STATE = {
  loading: false,
  results: [{ url: "", return: [] }],
  error: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.GET_CLASSI:
      return { ...state, loading: true };
    case ACTION_TYPE.ON_ADD_URL:
      return {
        ...state,
        results: [
          ...state.results,
          {
            url: "",
            return: [],
          },
        ],
      };
    case ACTION_TYPE.ON_DELETE_URL:
      return {
        ...state,
        results:
          state.results.length > 1
            ? [...state.results.slice(0, state.results.length - 1)]
            : [...state.results],
      };
    case ACTION_TYPE.CLASSI_RECEIVED:
      return { ...state, results: [...action.json], loading: false };
    case ACTION_TYPE.ERROR_MESSAGE:
      return { ...state, error: action.error, loading: false };
    case ACTION_TYPE.ON_DELETE_ERROR:
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default reducer;
