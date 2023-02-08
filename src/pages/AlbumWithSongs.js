import { useParams } from "react-router-dom";
import LoadingIcon from "../components/LoadingIcon";
import AlbumInfo from "../components/AlbumInfo";
import AlbumSongsList from "../components/AlbumSongsList";
import useAlbumWithSongs from "../hooks/useAlbumWithSongs";

const AlbumWithSongs = () => {
  const { id } = useParams();

  const { album, loading, error, changeCurrentSong } = useAlbumWithSongs(id);

  const {
    collectionName: albumName,
    artistName,
    artworkUrl100: artwork,
  } = album.info;

  if (loading) {
    return <LoadingIcon />;
  }

  if (error) {
    return <p className="errorMessage">{error}</p>;
  }

  return (
    <>
      {albumName && (
        <AlbumInfo
          className="albumInfo"
          name={albumName}
          artistName={artistName}
          artwork={artwork}
        />
      )}

      {album.songs.length > 0 ? (
        <AlbumSongsList
          songs={album.songs}
          changeCurrentSong={changeCurrentSong}
        />
      ) : (
        <p className="noSongs">Este álbum no tiene canciones disponibles 😟</p>
      )}
    </>
  );
};

export default AlbumWithSongs;
