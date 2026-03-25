import "./Home.css";
import SearchBar from "../SeachBar/SearchBarContainer";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplayContainer";
import ThemeToggleBtn from "../ThemeToggleBtn/ThemeToggleBtn";
import useSearchBar from "../../hooks/useSearchBar";

export default function Home() {
  const { searchValue, setSearch, weatherInfo } = useSearchBar();
  console.log("weather info: ", weatherInfo);
  
  return (
    <>
      <SearchBar searchValue={searchValue} setSearch={setSearch} />
      <WeatherDisplay weatherInfo={weatherInfo} />
      <ThemeToggleBtn />
    </>
  );
}
