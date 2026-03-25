export interface GeoLocationInfo {
    country: string
    lat: number;
    lon: number;
    state: string;
}

export interface WeatherInfo extends GeoLocationInfo {
    main: string; 
    description: string;
    temperature: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    humidity: number;
}
