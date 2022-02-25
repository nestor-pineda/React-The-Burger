import ThemeProvider from "./Context/ThemeContext/ThemeProvider";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Config/routes";
import { AuthProvider } from "./Context/LoginContext";
import AppRoutes from "./components/AppRoute";

// Hacemos un bucle a través de las rutas que definimos en el routes.js en el componente react-router Routes para configurar el enrutamiento en nuestra aplicación.
// AuthProvider nos asegurará que cada componente de nuestra aplicación tenga acceso al contexto del Login.

function App() {
  return (
    <ThemeProvider>
      <div className="theme">
        <Layout>
          <AuthProvider>
            <Router>
              <Routes>
                {routes.map((route) => (
                  <Route key={route.path} path={route.path} element={route.element} />
                ))}
                <Route element={<AppRoutes />} path="/dashboard" />
              </Routes>
            </Router>
          </AuthProvider>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
