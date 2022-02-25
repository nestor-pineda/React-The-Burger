// Este archivo contiene la configuración de las diferentes rutas de nuestra aplicación a las que atacamos desde el Frontend.
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFoud";

const routes = [
  {
    path: "/",
    element: <Login />,
    isPrivate: false,
  },
  {
    path: "/*",
    element: <NotFound />,
    isPrivate: true,
  },
];

export default routes;
