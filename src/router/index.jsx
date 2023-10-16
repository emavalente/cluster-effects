import { createBrowserRouter } from "react-router-dom";
import BuildingPage from "../pages/BuildingPage";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BuildingPage />,
    errorElement: <ErrorPage />,
  },
]);
