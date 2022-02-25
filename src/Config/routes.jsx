// Este archivo contiene la configuración de las diferentes rutas de nuestra aplicación a las que atacamos desde el Frontend.
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import NotFound from "../Pages/NotFoud";

const routes = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

export default routes;
