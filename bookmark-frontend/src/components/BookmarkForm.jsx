import { useState } from "react";

function BookmarkForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [genre, setGenre] = useState("learning");

  const submit = (e) => {
    e.preventDefault();
    onAdd({ title, url, genre });
    setTitle("");
    setUrl("");
  };

  return (
    <form onSubmit={submit} className="form">
      <input placeholder="Title" value={title}
        onChange={(e) => setTitle(e.target.value)} required />

      <input placeholder="URL" value={url}
        onChange={(e) => setUrl(e.target.value)} required />

      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="learning">Learning</option>
        <option value="personal">Personal</option>
        <option value="movies">Movies</option>
      </select>

      <button>Add Bookmark</button>
    </form>
  );
}

export default BookmarkForm;
