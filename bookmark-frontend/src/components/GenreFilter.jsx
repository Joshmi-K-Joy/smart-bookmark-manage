function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="genre-filter">
      <button
        className={selectedGenre === "all" ? "active" : ""}
        onClick={() => onSelect("all")}
      >
        All
      </button>
      {genres.map((g) => (
        <button
          key={g}
          className={selectedGenre === g ? "active" : ""}
          onClick={() => onSelect(g)}
        >
          {g.charAt(0).toUpperCase() + g.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
