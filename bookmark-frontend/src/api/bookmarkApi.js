import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/bookmarks/";

export const getBookmarks = () => axios.get(API_URL);
export const addBookmark = (data) => axios.post(API_URL, data);
export const deleteBookmark = (id) => axios.delete(`${API_URL}${id}/`);


