import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Error from "./components/Error/Error";

// here we create routes to navigate between the pages
// Root is the parent component that contains the navbar and footer
// Home is the home page that contains the home component
// Listed Books is the page that lists all the books that are available
// Pages to Read is the page that lists all the pages to read that are available

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
