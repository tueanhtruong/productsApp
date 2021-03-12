const reducer = (
  state = { loading: false, results: [{ url: "", return: [] }], error: "" },
  action
) => {
  switch (action.type) {
    case "GET_CLASSI":
      return { ...state, loading: true };
    case "ON_ADD_URL":
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
    case "ON_DELETE_URL":
      return {
        ...state,
        results:
          state.results.length > 1
            ? [...state.results.slice(0, state.results.length - 1)]
            : [...state.results],
      };
    case "CLASSI_RECEIVED":
      return { ...state, results: [...action.json], loading: false };
    case "ERROR_MESSAGE":
      return { ...state, error: action.error, loading: false };
    case "ON_DELETE_ERROR":
      return { ...state, error: "" };
    default:
      return state;
  }
};

export default reducer;
