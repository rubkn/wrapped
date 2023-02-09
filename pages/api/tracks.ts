import { type NextRequest } from 'next/server';
import { topTracks } from '@lib/spotify';
import { Track } from '@lib/types';

export const config = {
  runtime: 'edge'
};

export default async function handler(req: NextRequest) {
  const response = await topTracks();
  const { items } = await response.json();

  console.log(response);
  console.log(items);

  const tracks = items?.slice(0, 10).map((track: Track) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    title: track.name,
    img: track.album.images[1].url
  }));

  return new Response(JSON.stringify({ tracks }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}
