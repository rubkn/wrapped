export type Track = {
  name: string;
  artists: { name: string }[];
  album: { images: { url: string }[] };
  external_urls: { spotify: string };
};

export type Artist = {
  name: string;
  images: { url: string }[];
  external_urls: { spotify: string };
  followers: { total: number };
};

export type TrackResponse = {
  artist: string;
  url: string;
  title: string;
  img: string;
};
