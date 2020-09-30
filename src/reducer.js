export const initialState = {
  user: null,
  discover_weekly: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQARqYeP6DKQ3W4bmEnwUopDsYpcVU6OxXC9UH4RH0mHMMkd5Y…ybM_isaoUer-59dMxJ8y6gI2-Mit4eq4bONb99REbBP1SaZn7",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.user };
    case "SET_TOKEN":
      return { ...state, token: action.token };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default: {
      return state;
    }
  }
};

export default reducer;
