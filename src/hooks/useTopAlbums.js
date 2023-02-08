import { useState, useEffect } from "react";
import getTopAlbums from "../services/getTopAlbums";

const useTopAlbums = () => {
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTopAlbums = async () => {
      try {
        setLoading(true);

        const fetchedAlbums = await getTopAlbums();

        setAlbums(fetchedAlbums);
      } catch (error) {
        console.error(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopAlbums();
  }, []);

  return { albums, loading, error };
};

export default useTopAlbums;
