const AlbumSong = ({ trackName, previewUrl, changeCurrentSong }) => {
  return (
    <article className="albumSong">
      <h2>{trackName}</h2>

      <audio
        src={previewUrl}
        onPlay={(event) => {
          changeCurrentSong(event.target);
        }}
        controls
      >
        Tu navegador no soporta la etiqueta de audio de HTML5
      </audio>
    </article>
  );
};

export default AlbumSong;
