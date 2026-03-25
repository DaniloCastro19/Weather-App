import type { GeoLocationInfo } from "../../models/WeatherModels";
import useWheaterInfo from "../../hooks/useWheaterInfo";
import './weatherDisplay.css';

export default function WeatherDisplay({
  country,
  state,
  lat,
  lon,
}: GeoLocationInfo) {
  const { weatherInfo } = useWheaterInfo({ lat, lon });

  return (
    <div className="weatherCard">
      <h1>{country}</h1>
      <h2>{state}</h2>
      <h3>Main weather: {weatherInfo.main}</h3>
      <p>{weatherInfo.description}</p>
      <small>
        Latitude: {lat} | Longitude: {lon}
      </small>
    </div>
  );
}
