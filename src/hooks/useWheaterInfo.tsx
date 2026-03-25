import { useEffect, useState } from "react";
import type { WeatherInfo } from "../models/WeatherModels";
import { env } from "../env/environment.development";

interface UseWeather {
  lat: number;
  lon: number;
}

export default function useWheaterInfo({ lat, lon }: UseWeather) {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({
    main: "",
    description: "",
  });

  useEffect(() => {
    const getWeatherInfo = async () => {
      try {
        const response = await fetch(
          `${env.WeatherLocationinfo}?lat=${lat}&lon=${lon}&${env.APIKeyPrefix}`,
        );

        const results = await response.json();
        setWeatherInfo(results.weather[0]);
      } catch (error) {
        console.error(error);
      }
    };
    getWeatherInfo();
  }, [lat, lon]);

  return { weatherInfo };
}
