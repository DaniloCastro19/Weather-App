import WeatherDisplay from "../WeatherDisplay/WeatherDisplayContainer";
import useSearchBar from "../../hooks/useSearchBar";
import "./searchBar.css";

export default function SearchBar() {
  const { searchValue, setSearch, geoLocationInfo } = useSearchBar();
  return (
    <>
      <input
        type="text"
        placeholder="Search Location"
        value={searchValue}
        onChange={(e) => setSearch(e.target.value)}
      />
      {geoLocationInfo.length > 0 ? (
        <WeatherDisplay
          country={geoLocationInfo[0].country}
          state={geoLocationInfo[0].state}
          lat={geoLocationInfo[0].lat}
          lon={geoLocationInfo[0].lon}
        />
      ) : (
        <h2>Type a location to search</h2>
      )}
    </>
  );
}
