import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
// import FrontPagePreview from "./Components/Preview/FrontPagePreview.jsx";
import Preview from "./Components/Preview/Preview.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
      },
      {
        path: "preview",
        element: <Preview></Preview>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
