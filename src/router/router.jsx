import { createBrowserRouter } from "react-router";
import AllBooks from "../pages/AllBooks/AllBooks";
import Home from "../pages/Home/Home";
import MainLayout from "../components/layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

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
      },
      {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);
