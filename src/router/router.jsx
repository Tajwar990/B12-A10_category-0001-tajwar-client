import { createBrowserRouter } from "react-router";
import AllBooks from "../pages/AllBooks/AllBooks";
import Home from "../pages/Home/Home";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import AddBooks from "../pages/AddBooks/AddBooks";
import axios from "axios";
import BookDetails from "../pages/BookDetails/BookDetails";
import UpdateBook from "../pages/UpdateBook/UpdateBook";
import MyBooks from "../pages/MyBooks/MyBooks";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const res = await axios.get("http://localhost:3000/latest-books");
          return res.data;
        },
      },
      {
        path: "/all-books",
        element: <AllBooks></AllBooks>,
        loader: async () => {
          const res = await axios.get("http://localhost:3000/books");
          return res.data;
        },
      },
      {
        path: "/add-book",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/books/${params.id}`),
      },
      {
        path: "/update-book/:id",
        element: (
          <PrivateRoute>
            <UpdateBook></UpdateBook>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch(`http://localhost:3000/books/${params.id}`);
          const data = await res.json();
          return data.result;
        },
      },
      {
        path: "/myBooks",
        element: (
          <PrivateRoute>
            <MyBooks></MyBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Registration></Registration>,
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
