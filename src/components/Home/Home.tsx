import "./Home.css";
import SearchBar from "../SeachBar/SearchBarContainer";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplayContainer";
import useSearchBar from "../../hooks/useSearchBar";

export default function Home() {
  const { searchValue, setSearch, weatherInfo, loading, error} = useSearchBar();

  return (
    <main className="homeContainer">
      <SearchBar searchValue={searchValue} setSearch={setSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherInfo && searchValue && !loading && !error && (
        <WeatherDisplay weatherInfo={weatherInfo} city={searchValue} isLoading={loading}/>
      )}
    </main>
  );
}
