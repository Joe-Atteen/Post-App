let initialState = {
  posts: [],
  profiles: [],
};

let Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_POST":
      return {
        ...state,
        posts: action.payload,
      };
    case "ADD_NEW_PROFILE":
      return {
        ...state,
        profiles: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
