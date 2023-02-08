import { useState, useEffect } from "react";
import getAlbumWithSongs from "../services/getAlbumWithSongs";

const useAlbumWithSongs = (id) => {
  const [album, setAlbum] = useState({ info: {}, songs: [] });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);

  const changeCurrentSong = (song) => {
    if (currentSong && currentSong !== song) {
      currentSong.pause();
    }

    setCurrentSong(song);
  };

  useEffect(() => {
    const fetchAlbumWithSongs = async () => {
      try {
        setLoading(true);

        const fetchedAlbum = await getAlbumWithSongs(id);

        setAlbum(fetchedAlbum);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAlbumWithSongs();
  }, [id]);

  return { album, loading, error, changeCurrentSong };
};

export default useAlbumWithSongs;
