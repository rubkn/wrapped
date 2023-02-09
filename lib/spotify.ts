const spotify_api = `https://api.spotify.com/v1/me`;
const token = `https://accounts.spotify.com/api/token`;

const top_tracks = `${spotify_api}/top/tracks`;
const now_playing = `${spotify_api}/player/currently-playing`;
const top_artists = `${spotify_api}/top/artists?time_range=short_term`;

const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const _accessToken = async () => {
  const response = await fetch(token, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${btoa(
        `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
      )}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    // @ts-ignore
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token
    })
  });

  return response.json();
};

export const nowPlaying = async () => {
  const { access_token } = await _accessToken();

  return fetch(now_playing, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const topTracks = async () => {
  const { access_token } = await _accessToken();

  return fetch(top_tracks, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

export const topArtists = async () => {
  const { access_token } = await _accessToken();

  return fetch(top_artists, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};
