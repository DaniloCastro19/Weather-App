import { useEffect, useState } from "react";
import type { GeoLocationInfo, WeatherInfo } from "../models/WeatherModels";
import { env } from "../env/environment.development";

export default function useSearchBar() {
  const [searchValue, setSearch] = useState("");
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
  });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const locationsResponse = await fetch(
          `${env.GeoLocalizationURL}?q=${searchValue}&limit=${1}&${env.APIKeyPrefix}`,
        );

        if (!locationsResponse.ok) {
          throw new Error("Error fetching location.");
        }
        const locations = await locationsResponse.json();

        setGeoLocation(locations[0]);

        const locationWeatherResponse = await fetch(
          `${env.WeatherLocationinfo}?lat=${geoLocationInfo?.lat}&lon=${geoLocationInfo?.lon}&${env.APIKeyPrefix}`,
        );
        if (!locationWeatherResponse.ok) {
          throw new Error("Error fetching location weather.");
        }

        const weatherResults = await locationWeatherResponse.json();
        const weatherInfo: WeatherInfo = {
          ...locations[0],
          main: weatherResults.weather[0].main,
          description: weatherResults.weather[0].description,
        };

        setWeatherInfo(weatherInfo);
      } catch (error) {
        console.error(error);
      }
    };
    getLocation();
  }, [searchValue]);

  return {
    searchValue,
    setSearch,
    weatherInfo,
    // geoLocationInfo,
  };
}
