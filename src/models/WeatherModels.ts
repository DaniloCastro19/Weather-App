export interface GeoLocationInfo {
    country: string
    lat: number;
    lon: number;
    state: string;
}

export interface WeatherInfo extends GeoLocationInfo {
    main: string; 
    description: string; 
}
