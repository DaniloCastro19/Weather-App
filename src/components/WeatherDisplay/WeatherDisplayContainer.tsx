import type { WeatherInfo } from "../../models/WeatherModels";
import "./weatherDisplay.css";

interface WeatherDisplayProps {
  weatherInfo: WeatherInfo;
}

export default function WeatherDisplay({ weatherInfo }: WeatherDisplayProps) {
  return (
    <div className="weatherCard">
      <h1>{weatherInfo.country}</h1>
      <h2>{weatherInfo.state}</h2>
      <h3>Main weather: {weatherInfo.main}</h3>
      <p>{weatherInfo.description}</p>
      <small>
        Latitude: {weatherInfo.lat} | Longitude: {weatherInfo.lon}
      </small>
    </div>
  );
}
