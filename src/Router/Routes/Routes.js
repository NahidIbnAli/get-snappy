import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home/Home";
import NotFound from "../../pages/NotFound/NotFound";
import Services from "../../pages/Services/Services";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
