// Este archivo contiene la configuración de las diferentes rutas de nuestra aplicación a las que atacamos desde el Frontend.
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NotFound from "../Pages/NotFoud";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";
import SingleProduct from "../Pages/SingleProduct";

const routes = [
  {
    path: "/",
    element: <Home />,
    isPrivate: false,
  },
  {
    path: "/login",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/register",
    element: <Register />,
    isPrivate: false,
  },
  {
    path: "/menu",
    element: <Menu />,
    isPrivate: false,
  },
  {
    path: "/single/:id",
    element: <SingleProduct />,
    isPrivate: false,
  },
  {
    path: "/*",
    element: <NotFound />,
    isPrivate: false,
  },
];

export default routes;
