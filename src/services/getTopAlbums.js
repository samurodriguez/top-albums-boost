import { DAY_IN_MILLISECONDS } from "./contants";

const getTopAlbums = async () => {
  const cache = JSON.parse(localStorage.getItem("albums"));

  const didCacheExpire = Date.now() - cache?.time > DAY_IN_MILLISECONDS;

  if (cache && !didCacheExpire) {
    return cache.data;
  }

  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://rss.applemarketingtools.com/api/v2/es/music/most-played/50/albums.json"
    )}`
  );

  if (!res.ok) {
    throw new Error("No se han podido cargar los álbums. Prueba más tarde");
  }

  const body = await res.json();

  const fetchedAlbums = JSON.parse(body.contents).feed.results;

  localStorage.setItem(
    "albums",
    JSON.stringify({ data: fetchedAlbums, time: Date.now() })
  );

  return fetchedAlbums;
};

export default getTopAlbums;
