import ThemeProvider from "./Context/ThemeContext/ThemeProvider";
import Layout from "./components/Layout";

function App() {
  return (
    <ThemeProvider>
      <div className="theme">
        <Layout></Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
