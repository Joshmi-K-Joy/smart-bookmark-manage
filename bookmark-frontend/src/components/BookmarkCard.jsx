import React, { useState, useEffect } from "react";

function BookmarkCard({ bookmark, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(bookmark.title);
  const [url, setUrl] = useState(bookmark.url);
  const [genre, setGenre] = useState(bookmark.genre);

  useEffect(() => {
    setTitle(bookmark.title);
    setUrl(bookmark.url);
    setGenre(bookmark.genre);
  }, [bookmark]);

  const handleSave = () => {
    onUpdate(bookmark.id, { title, url, genre });
    setIsEditing(false);
  };

  return (
    <div className="card" data-genre={bookmark.genre}>
      {isEditing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <input value={url} onChange={(e) => setUrl(e.target.value)} />
          <select value={genre} onChange={(e) => setGenre(e.target.value)}>
            <option value="learning">Learning</option>
            <option value="personal">Personal</option>
            <option value="movies">Movies</option>
          </select>
          <div className="card-actions">
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h4>{bookmark.title}</h4>
          <a href={bookmark.url} target="_blank" rel="noreferrer">Visit</a>
          <div className="card-actions">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDelete(bookmark.id, bookmark.title)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default BookmarkCard;
