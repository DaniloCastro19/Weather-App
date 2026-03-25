import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useSearchBar from "../../hooks/useSearchBar";
import "./WeatherDetails.css"

export default function WeatherDetails() {
  const { city } = useParams<string>();
  const { setSearch, weatherInfo } = useSearchBar();

  useEffect(() => {
    if (city) {
      setSearch(city);
    }
  }, [city, setSearch]);

  return (
    <div className="weatherDetailsCard">
      <h1>{city}</h1>
      <h2>{weatherInfo.country} - {weatherInfo.state}</h2>
      <p>Temperature: {weatherInfo.temperature}°C</p>
      <p>Description: {weatherInfo.description}</p>
      <p>Feels Like: {weatherInfo.feels_like}°C</p>
      <p>Min Temperature: {weatherInfo.temp_min}°C</p>
      <p>Max Temperature: {weatherInfo.temp_max}°C</p>
      <p>Humidity: {weatherInfo.humidity}%</p>
    </div>
  );
}
