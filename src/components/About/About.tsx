import "./About.css";
export default function About() {
  return (
    <section className="aboutSection">
      <h1>About This App</h1>
      <p>
        This Weather App is a simple React application that allows users to
        search for weather forecasts by city. It uses the OpenWeatherMap API to
        fetch weather data and displays it in a user-friendly format. The app
        also includes a theme toggle button to switch between light and dark
        modes.
      </p>
      <p><strong>Created by Danilo Castro.</strong></p>
    </section>
  );
}
