import ThemeSetter from "./components/ThemeSetter";
import ThemeProvider from "./Context/ThemeContext/ThemeProvider";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider>
      <ThemeSetter />
      <div className="myClass">
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
