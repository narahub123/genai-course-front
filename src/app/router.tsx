import { createBrowserRouter } from "react-router-dom";
import { Home, Study, Report, Toy, Extra } from "../pages";
import { PageLayout } from "../layouts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/study",
          element: <Study />,
        },
        {
          path: "/report",
          element: <Report />,
        },
        {
          path: "/toy",
          element: <Toy />,
        },
        {
          path: "/extra",
          element: <Extra />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_URL,
  }
);

export default router;
