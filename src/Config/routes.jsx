// Este archivo contiene la configuración de las diferentes rutas de nuestra aplicación a las que atacamos desde el Frontend.
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFoud";
import Home from "../Pages/Home";
import Menu from "../Pages/Menu";

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
    path: "/menu",
    element: <Menu />,
    isPrivate: false,
  },
  {
    path: "/*",
    element: <NotFound />,
    isPrivate: false,
  },
];

export default routes;
