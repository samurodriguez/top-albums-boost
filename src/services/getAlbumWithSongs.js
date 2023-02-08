import { DAY_IN_MILLISECONDS } from "./contants";

const getAlbumWithSongs = async (id) => {
  const cache = JSON.parse(localStorage.getItem(`album-${id}`));

  const didCacheExpire = Date.now() - cache?.time > DAY_IN_MILLISECONDS;

  if (cache && !didCacheExpire) {
    return cache.data;
  }

  const res = await fetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${id}&entity=song`
    )}`
  );

  if (!res.ok) {
    throw new Error("No se ha podido cargar el álbum. Prueba más tarde");
  }

  const body = await res.json();

  const [info, ...songs] = JSON.parse(body.contents).results;

  if (!info) {
    throw new Error("El álbum no existe");
  }

  const fetchedAlbum = { info, songs };

  localStorage.setItem(
    `album-${id}`,
    JSON.stringify({ data: fetchedAlbum, time: Date.now() })
  );

  return fetchedAlbum;
};

export default getAlbumWithSongs;
