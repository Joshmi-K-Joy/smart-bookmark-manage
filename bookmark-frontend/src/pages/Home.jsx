import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; 
import axios from "axios"; 
import BookmarkCard from "../components/BookmarkCard";
import BookmarkForm from "../components/BookmarkForm";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const [bookmarks, setBookmarks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("all"); // default: show all

  // Load bookmarks from backend
  useEffect(() => {
    loadBookmarks();
  }, []);

  const loadBookmarks = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/bookmarks/");
      setBookmarks(res.data);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to load bookmarks", "error");
    }
  };

  // Add new bookmark
  const handleAdd = async (data) => {
    try {
      await axios.post("http://127.0.0.1:8000/api/bookmarks/", data);
      loadBookmarks();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Bookmark "${data.title}" added!`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Failed to add bookmark", "error");
    }
  };

  // Delete bookmark
  const handleDelete = async (id, title) => {
    const result = await Swal.fire({
      title: `Delete "${title}"?`,
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      reverseButtons: true
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/bookmarks/${id}/`);
        loadBookmarks();
        Swal.fire({
          position: "center",
          icon: "success",
          title: `Bookmark "${title}" deleted!`,
          showConfirmButton: false,
          timer: 1500,
        });
      } catch (error) {
        console.error(error);
        Swal.fire("Error", "Failed to delete bookmark", "error");
      }
    }
  };

  // Update bookmark
  const handleUpdate = async (id, data) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/bookmarks/${id}/`, data);
      loadBookmarks();
      Swal.fire({
        position: "center",
        icon: "success",
        title: `Bookmark "${data.title}" updated!`,
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error(error.response?.data || error);
      Swal.fire("Error", "Failed to update bookmark", "error");
    }
  };

  // Group bookmarks by genre
  const grouped = {
    learning: bookmarks.filter((b) => b.genre === "learning"),
    personal: bookmarks.filter((b) => b.genre === "personal"),
    movies: bookmarks.filter((b) => b.genre === "movies")
  };

  // Genres for buttons
  const genres = ["all", "learning", "personal", "movies"];

  return (

    
    <div className="container">
      <h2>Smart Bookmark Manager</h2>

      {/* Form to add new bookmark */}
      <BookmarkForm onAdd={handleAdd} />

      {/* Filter buttons*/}
      <div className="genre-buttons">
        {genres.map((genre) => (
          <button
            key={genre}
            className={selectedGenre === genre ? "active" : ""}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Grouping according to category*/}
      {Object.keys(grouped)
        .filter((genre) => selectedGenre === "all" || selectedGenre === genre)
        .map((genre) => (
          <div key={genre}>
            <h3>{genre.toUpperCase()}</h3>
            <div className="grid">
              {grouped[genre].map((b) => (
                <BookmarkCard
                  key={b.id}
                  bookmark={b}
                  onDelete={handleDelete} //delete
                  onUpdate={handleUpdate} //editing
                />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Home;
