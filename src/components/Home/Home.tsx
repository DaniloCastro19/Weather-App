import "./Home.css";
import SearchBar from "../SeachBar/SearchBarContainer";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplayContainer";
import useSearchBar from "../../hooks/useSearchBar";

export default function Home() {
  const { searchValue, setSearch, weatherInfo } = useSearchBar();

  return (
    <main className="homeContainer">
      <SearchBar searchValue={searchValue} setSearch={setSearch} />
      {weatherInfo && searchValue && (
        <WeatherDisplay weatherInfo={weatherInfo} city={searchValue} />
      )}
    </main>
  );
}
