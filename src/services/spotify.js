const authEndPoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "5d1682bf972140d09af086b6ba77e14e";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-playback-state",
  // "playlist-read-private",       //extra scope added
  "playlist-read-collaborative", //extra scope added
  "user-follow-read",
  "user-library-read",
  "user-read-recently-played",
];

export const getTokenUrl = () => {
  return window.location.hash
    .substr(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
