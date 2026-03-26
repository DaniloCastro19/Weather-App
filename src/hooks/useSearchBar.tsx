import { useEffect, useState } from "react";
import type { GeoLocationInfo, WeatherInfo } from "../models/WeatherModels";
import { env } from "../env/environment.development";
import useDebounce from "./useDebounce";

export default function useSearchBar() {
  const [searchValue, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [geoLocationInfo, setGeoLocation] = useState<GeoLocationInfo>({
    country: "",
    lat: 0,
    lon: 0,
    state: "",
  });

  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({
    ...geoLocationInfo,
    main: "",
    description: "",
    temperature: 0,
    feels_like: 0,
    temp_min: 0,
    temp_max: 0,
    humidity: 0,
  });

  const debouncedSearchValue = useDebounce<string>(searchValue, 500);

  useEffect(() => {
    const getLocation = async () => {
      try {
        if (debouncedSearchValue.trim() === "") {
          return;
        }
        setLoading(true);
        setError(null);
        const locationsResponse = await fetch(
          `${env.GeoLocalizationURL}?q=${debouncedSearchValue}&limit=${1}&${env.APIKeyPrefix}`,
        );

        if (!locationsResponse.ok) {
          throw new Error("Error fetching location.");
        }
        const locations = await locationsResponse.json();

        setGeoLocation(locations[0]);

        const locationWeatherResponse = await fetch(
          `${env.WeatherLocationinfo}?lat=${geoLocationInfo.lat}&lon=${geoLocationInfo.lon}&units=metric&${env.APIKeyPrefix}`,
        );
        if (!locationWeatherResponse.ok) {
          throw new Error("Error fetching location weather.");
        }

        const weatherResults = await locationWeatherResponse.json();
        console.log("Location weather info: ", weatherResults);

        const weatherInfo: WeatherInfo = {
          ...locations[0],
          main: weatherResults.weather[0].main,
          description: weatherResults.weather[0].description,
          temperature: weatherResults.main.temp,
          feels_like: weatherResults.main.feels_like,
          temp_min: weatherResults.main.temp_min,
          temp_max: weatherResults.main.temp_max,
          humidity: weatherResults.main.humidity,
        };

        setWeatherInfo(weatherInfo);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch weather information. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    getLocation();
  }, [debouncedSearchValue]);

  return {
    searchValue,
    setSearch,
    weatherInfo,
    loading,
    error,
  };
}
