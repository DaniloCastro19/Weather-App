import "./App.css";
import SearchBar from "./components/SeachBar/SearchBarContainer";
import ThemeToggleBtn from "./components/ThemeToggleBtn/ThemeToggleBtn";
import { ThemeProvider } from "./context/ThemeContext";

function App() {

  return (
    <ThemeProvider>
      <SearchBar></SearchBar>
      <ThemeToggleBtn></ThemeToggleBtn>
    </ThemeProvider>
  );
}

export default App;
