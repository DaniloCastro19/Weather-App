import { useEffect, useState } from "react";
import type { GeoLocationInfo } from "../models/WeatherModels";
import { env } from "../env/environment.development";

export default function useSearchBar() {
  const [searchValue, setSearch] = useState("");
  const [geoLocationInfo, setGeoLocation] = useState<GeoLocationInfo[]>([]);

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch(
          `${env.GeoLocalizationURL}?q=${searchValue}&limit=${1}&${env.APIKeyPrefix}`,
        );

        if (!response.ok) {
          throw new Error("Error fetching location.");
        }
        const results: GeoLocationInfo[] = await response.json();

        setGeoLocation(results);
      } catch (error) {
        console.error(error);
      }
    };
    getLocation();
  }, [searchValue]);

  return {
    searchValue,
    setSearch,
    geoLocationInfo,
  };
}
