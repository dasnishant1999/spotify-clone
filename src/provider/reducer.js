export const initialState = {
  //token initialized just for debugging purpose, remove it in build mode
  token:null,
    // "BQB2QJABqh65YVhWjAtXL7kAFQkDc3moCPZhtLg_j6OlkGuo2oVfcp4kbybJyyAHP2f71BKzAcsD6lP0OehFD2ju7-RaZigQoEbAsDv8LUOKFmGHVp7HJ27q5uDeHhSzc8zAv7gBom3aXmySv0mjVE4_dnJTWSyZWp6O3r4Wk3CmbJvhmNCe",
  user: null,
  playlists: [],
  playing: false,
  items: null,
};

const reducer = (state, action) => {
  //action type   payload   this is in dispatch function
  // console.log(action);
  switch (action.type) {
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_PLAYLIST":
      return {
        ...state,
        playlist: action.playlist,
      };

    default:
      return state;
  }
};

export default reducer;
