import AlbumSong from "./AlbumSong";

const AlbumSongsList = ({ songs, changeCurrentSong }) => {
  return (
    <ul className="albumSongsList">
      {songs.map((song) => {
        const { trackId, trackName, previewUrl } = song;

        return (
          <li key={trackId}>
            <AlbumSong
              trackName={trackName}
              previewUrl={previewUrl}
              changeCurrentSong={changeCurrentSong}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default AlbumSongsList;
