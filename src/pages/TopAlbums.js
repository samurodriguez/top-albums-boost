import { Link } from "react-router-dom";
import AlbumInfo from "../components/AlbumInfo";
import LoadingIcon from "../components/LoadingIcon";
import useTopAlbums from "../hooks/useTopAlbums";

const TopAlbums = () => {
  const { albums, loading, error } = useTopAlbums();

  if (loading) {
    return <LoadingIcon />;
  }

  if (error) {
    return <p className="errorMessage">{error}</p>;
  }

  return (
    albums.length > 0 && (
      <ul className="albumsList">
        {albums.map((album) => {
          const { id, name, artistName, artworkUrl100: artwork } = album;

          return (
            <li key={id}>
              <Link to={`/album/${id}`}>
                <AlbumInfo
                  className="albumCard"
                  name={name}
                  artistName={artistName}
                  artwork={artwork}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default TopAlbums;
