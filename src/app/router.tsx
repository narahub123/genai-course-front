import { createBrowserRouter } from "react-router-dom";
import { Home, Study } from "../pages";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/study",
      element: <Study />,
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

export default router;
