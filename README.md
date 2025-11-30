# 📚 Book Haven

Book Haven is a modern web application that allows users to **add, read, update, and delete books**. Users can browse books by genre, view featured books, and interact with a sleek, responsive UI. The project uses **React** for the frontend, **Axios** for API calls, and **MongoDB Atlas** for database storage.

---

## 🛠 Features

### User Actions

- **Add Books**: Users can add new books with details like title, author, genre, rating, summary, and cover image (via URL).
- **View Books**: Browse all books on the “All Books” page in a responsive table or grid format.
- **Update & Delete**: Users can update or delete **only their own books**.
- **Book of the Week**: Highlights a featured book dynamically.
- **Top Genres**: Showcases top-rated books for each genre dynamically.

### UI Components

- **Banner**: Interactive book carousel using `Swiper.js`.
- **BooksCard**: Reusable card for displaying book details.
- **Dynamic Sections**: `TopGenres` and `BookOfTheWeek` sections showcase content based on book ratings.
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop.

### Notifications & Feedback

- **React Hot Toast**: Shows success or error messages for book actions.
- **React Tooltip**: Provides helpful tooltips across the UI.

---

## 🛠 Technologies Used

- **Frontend**:

  - React
  - Tailwind CSS
  - React Router DOM
  - Axios
  - Swiper.js (for banner/carousel)
  - React Hot Toast
  - React Tooltip

- **Backend / API**:
  - Node.js + Express (assumed for REST API)
  - MongoDB Atlas (cloud database)
  - firebase
