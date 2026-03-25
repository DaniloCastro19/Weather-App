import { useParams } from "react-router-dom"

export default function WeatherDetails() {
  const {locationName} = useParams();

  return (
    <div>Return weather of {locationName}</div>
  )
}
