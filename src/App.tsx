import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggleBtn from "./components/ThemeToggleBtn/ThemeToggleBtn";
import Header from "./components/Header/Header";

const HomePage = lazy(() => import("./components/Home/Home"));
const WeatherDetailsPage = lazy(() => import("./components/WeatherDetails/WeatherDetails"));
const AboutPage = lazy(() => import("./components/About/About"));

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/forecast/:city" element={<WeatherDetailsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <ThemeToggleBtn />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
