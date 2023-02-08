const AlbumInfo = ({ className, name, artistName, artwork }) => {
  return (
    <article className={className}>
      <img src={artwork.replace("100x100", "500x500")} alt={`${name} album`} />

      <div>
        <h2 className="ellipsis" title={name}>
          {name}
        </h2>
        <h3>{artistName}</h3>
      </div>
    </article>
  );
};

export default AlbumInfo;
