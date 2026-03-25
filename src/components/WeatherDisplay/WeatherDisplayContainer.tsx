import type { WeatherInfo } from "../../models/WeatherModels";
import { Link } from "react-router-dom";
import "./weatherDisplay.css";

interface WeatherDisplayProps {
  weatherInfo: WeatherInfo;
  city: string;
}

export default function WeatherDisplay({
  weatherInfo,
  city,
}: WeatherDisplayProps) {
  return (
    <Link to={`/forecast/${city}`}>
      <div className="weatherCard">
        <h2>
          {weatherInfo.country} - {weatherInfo.state}
        </h2>
        <h3>Main weather: {weatherInfo.main}</h3>
        <p>{weatherInfo.description}</p>
        <small>
          Latitude: {weatherInfo.lat} | Longitude: {weatherInfo.lon}
        </small>
      </div>
    </Link>
  );
}
