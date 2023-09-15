import { useState } from "react";
import { useEffect } from "react";
import fakeWeather from "./data/FakeWeather.json";
import fakeWeatherData from "./fakeWeatherData.json";
import storm from "./img/weather-icons/storm.svg";
import fog from "./img/weather-icons/fog.svg";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import unknown from "./img/weather-icons/unknown.svg";
import WeatherNow from "./components/WeatherNow";
import SearchBar from "./components/SearchBar";
import WeatherFullDay from "./components/WeatherFullDay";
import "./App.css";

function App() {
  var api_key = "c1a97940da358fee0b27f79c504f0cf1";
  const [noresult, setRresult] = useState("search for a country");
  const [lalues, SetLalues] = useState("beirut");
  const fakeData = fakeWeather;

  const [data, setData] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  const handleClick2 = () => {
    SetLalues(document.getElementById("c").value);
  };
  const handleClick = () => {
    setRresult(`the results for ${document.getElementById("c").value} are:`);
  };
  ////////// test area /////////////
  const fetchy = () => {
    if (lalues !== "") {
      setIsLoading(true);
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${lalues}&cnt=8&units=metric&appid=${api_key}`
      )
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setData(data);

          setIsLoading(false);
        });
    }
  };
  /////////// test area ////////////
  useEffect(() => {
    fetchy();
  }, [lalues]);
  return (
    <div className="App">
      <>
        <nav>
          <SearchBar
            noresult={noresult}
            handleClick={handleClick}
            handleClick2={handleClick2}
          />
        </nav>
        {data && !isloading ? (
          <main>
            <section className="todayForecast chunk">
              <WeatherNow data={data} />
            </section>
            <section className="twentyFourHour">
              <WeatherFullDay data={data} />
            </section>
          </main>
        ) : (
          <h1 className="loading">Loading , please wait ...</h1>
        )}
      </>
    </div>
  );
}
export default App;
