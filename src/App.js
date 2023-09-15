
import React, { Component, useEffect } from "react"
import { useState } from "react"
import Search from "./components/Search"
// import FakeWeather from "./data/FakeWeather.json"
import SayHi, { SayHello } from "./components/WeatherItem"
import FakeWeather from "./fakeWeatherData.json"
import storm from "./img/weather-icons/storm.svg"
import fog from "./img/weather-icons/fog.svg"
import clear from "./img/weather-icons/clear.svg"
import cloudy from "./img/weather-icons/cloudy.svg"
import drizzle from "./img/weather-icons/drizzle.svg"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import partlycloudy from "./img/weather-icons/partlycloudy.svg"
import rain from "./img/weather-icons/rain.svg"
import snow from "./img/weather-icons/snow.svg"
import unknown from "./img/weather-icons/unknown.svg"
import axios from "axios";
import "./App.css"
export default App;


function SearchBar({ onChange }) {
  const [noresult, setRresult] = useState("search for a country");
  const handleClick = () => {
    setRresult("The results are:");
  }
  return (
    <>
      <input className="inputCity" placeholder="Type a city name" onBlur={onChange} />
      <button className="findWeather" type="submit" onClick={handleClick}>FIND WEATHER</button>
      <span className="showresults">{noresult}</span>
    </>
  )
}

function WeatherNow() {
  let min = FakeWeather.list[0].main.temp_min;
  let max = FakeWeather.list[0].main.temp_max;
  let humidity = FakeWeather.list[0].main.humidity;
  let pressure = FakeWeather.list[0].main.pressure;
  return (
    <>
      <img className="todayForecastPic" alt="todayWeatherLogo" src={partlycloudy} />
      <h1 className="overcast">overcast cloudy</h1>
      <h1 className="temperature">Temperature  {min}&deg;C to {max}&deg;C</h1>
      <p className="humidityPressure
    "> <span style={{ fontWeight: "bold" }}>Humidity  </span> {humidity}% <span style={{ fontWeight: "bold" }}>Pressure  </span>{pressure}</p>
    </>
  )
}
function WeatherFullDay() {
  let t1 = 8, t2 = 9, t3 = 14, t4 = 17, t5 = 18, t6 = 16, t7 = 16, t8 = 16;
  return (
    <>
      <div className="chunk c1">
        <p className="chunkTime">03:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={partlycloudy} />
        <p className="chunkTemp">{t1}&deg;C</p>
      </div>
      <div className="chunk c2">
        <p className="chunkTime">06:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={partlycloudy} />
        <p className="chunkTemp">{t2}&deg;C</p>
      </div>
      <div className="chunk c3">
        <p className="chunkTime">09:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
        <p className="chunkTemp">{t3}&deg;C</p>
      </div>
      <div className="chunk c4">
        <p className="chunkTime">12:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
        <p className="chunkTemp">{t4}&deg;C</p>
      </div>
      <div className="chunk c5">
        <p className="chunkTime">15:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
        <p className="chunkTemp">{t5}&deg;C</p>
      </div>
      <div className="chunk c6">
        <p className="chunkTime">18:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
        <p className="chunkTemp">{t6}&deg;C</p>
      </div>
      <div className="chunk c7">
        <p className="chunkTime">21:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
        <p className="chunkTemp">{t7}&deg;C</p>
      </div>
      <div className="chunk c8">
        <p className="chunkTime">21:00</p>
        <img className="threeHourChunk" alt="threeHourChunkPic" src={partlycloudy} />
        <p className="chunkTemp">{t8}&deg;C</p>
      </div>
    </>
  )
}



function App() {

  let apikey = '8474283015c4ba2bda978046ded09c9a';
  const [data, setData] = useState(null);
  const [search, setSearch] = useState(''); // Define search state

  const getWeather = async () => {
    let api = `http://api.openweathermap.org/data/2.5/forecast?q=${search}&cnt=8&units=metric&appid=${apikey}`;
    try {
      const response = await axios.get(api);
      const weatherData = response.data;
      setData(weatherData);
      console.log(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  useEffect(() => {
    getWeather()
  }, [search])


  console.log(FakeWeather)
  return (
    <div className="app">
      <nav>
        <SearchBar onChange={(e) => { setSearch(e.target.value) }} />
      </nav>
      <main>
        <section className="todayForecast chunk">
          <WeatherNow />
        </section>
        <section className="twentyFourHour">
          <WeatherFullDay />
        </section>
      </main>
    </div>
  );

}

