#  Smart Bookmark CRUD Application

## Project Overview

The **Smart Bookmark CRUD Application** is a backend-focused project built with **Django REST Framework** and **MySQL** that allows users to manage their bookmarks in a structured and validated way. The application supports **creating, reading, updating, and deleting bookmarks** with data integrity and validation. Bookmarks can be categorized into predefined **genres** for better organization.

This project emphasizes clean backend architecture, RESTful API design, and proper data validation.

---

##  Tech Stack

* **Backend:** Django, Django REST Framework
* **Database:** MySQL
* Frontend**: React
* Features**: Add, Edit, Delete, and View bookmarks
* Data Fields**: Title and URL for each bookmark
---

##  Features

* **CRUD Operations**:

  * **Create:** Add a new bookmark with a title, URL, and genre.
  * **Read:** Retrieve all bookmarks from the database.
  * **Update:** Modify existing bookmarks.
  * **Delete:** Remove bookmarks (hard delete in current implementation).

* **URL Validation**:

  * Only valid URLs starting with `http://` or `https://` are accepted.

* **Genre Categorization**:

  * Bookmarks are classified under predefined genres:

    * `learning`
    * `personal`
    * `movies`
      
  * Invalid genres are rejected automatically.

* **Clean REST API**:

  * All operations are exposed through **RESTful endpoints** using Django REST Framework’s `ModelViewSet`.
  * Only necessary fields are exposed to the API (no internal deletion flags visible to users).

---

##  Database Schema

**Bookmark Table:**

| Field | Type      | Description                     |
| ----- | --------- | ------------------------------- |
| id    | Integer   | Primary Key                     |
| title | CharField | Bookmark title                  |
| url   | URLField  | Validated bookmark URL          |
| genre | CharField | Predefined category of bookmark |

---



##  Key Design Decisions

* **Separate Concerns:** Models, serializers, and views are properly separated.
* **Validation First:** URLs and genres are validated at model and serializer levels.
* **Clean API:** No unnecessary internal fields exposed to clients.
* **Extensible:** Future features like recycle bin, soft delete, or frontend grouping can be added without breaking the API.


---

##  Conclusion

This project demonstrates **RESTful API design**, **data validation**, and **clean backend architecture** using Django REST Framework. It is a **solid foundation** for a full-stack bookmark manager application.

