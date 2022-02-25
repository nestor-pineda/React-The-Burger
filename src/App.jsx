import ThemeProvider from "./Context/ThemeContext/ThemeProvider";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Config/routes";

// Hacemos un bucle a través de las rutas que definimos en el routes.js en el componente react-router Routes para configurar el enrutamiento en nuestra aplicación.

function App() {
  return (
    <ThemeProvider>
      <div className="theme">
        <Layout>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
            </Routes>
          </Router>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
