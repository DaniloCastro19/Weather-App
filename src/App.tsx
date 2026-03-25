import { Routes, Route} from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/Home/Home";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import ThemeToggleBtn from "./components/ThemeToggleBtn/ThemeToggleBtn";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/forecast/:city" element={<WeatherDetails/>}/>
      </Routes>
      <ThemeToggleBtn />
    </ThemeProvider>
  );
}

export default App;
