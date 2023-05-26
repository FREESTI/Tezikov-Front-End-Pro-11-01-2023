const initialState = {
  loading: false,
  data: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_BEGIN":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_DATA_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
