import { Routes, Route} from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./components/Home/Home";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/weather/:locationName" element={<WeatherDetails/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
