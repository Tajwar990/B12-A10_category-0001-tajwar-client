import { createBrowserRouter } from "react-router";
import AllBooks from "../pages/AllBooks/AllBooks";
import Home from "../pages/Home/Home";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../Auth/Login";
import Registration from "../Auth/Registration";
import AddBooks from "../pages/AddBooks/AddBooks";
import axios from "axios";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
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
        element: <AddBooks></AddBooks>,
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
