import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
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
import "./App.css";

function App(){
    return (
      <div className="app">
        <nav>
          <input className="inputCity"  placeholder="Type a city name" />
          <button className="findWeather" type="submit">FIND WEATHER</button>
        </nav>
        <main>
          <section className="todayForecast chunk">
          <img className="todayForecastPic" alt="todayWeatherLogo" src={partlycloudy} />
          <h1 className="overcast">overcast cloudy</h1>
          <h1 className="temperature">Temperature 10&deg;C to 11&deg;C</h1>
          <p className="humidityPressure
          "> <span style={{fontWeight:"bold"}}>Humidity</span> 78% <span  style={{fontWeight:"bold"}}>Pressure</span> 1009.48</p>
          </section>
          <section className="twentyFourHour">
            <div className="chunk c1">
              <p className="chunkTime">03:00</p>
             <img className="threeHourChunk" alt="threeHourChunkPic" src={partlycloudy} />
              <p className="chunkTemp">8&deg;C</p>
            </div>
            <div className="chunk c2">
            <p className="chunkTime">06:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src={partlycloudy} />
              <p className="chunkTemp">9&deg;C</p>
            </div>
            <div className="chunk c3">
            <p className="chunkTime">09:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
              <p className="chunkTemp">14&deg;C</p>
            </div>
            <div className="chunk c4">
            <p className="chunkTime">12:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
              <p className="chunkTemp">17&deg;C</p>
            </div>
            <div className="chunk c5">
            <p className="chunkTime">15:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
              <p className="chunkTemp">18&deg;C</p>
            </div>
            <div className="chunk c6">
            <p className="chunkTime">18:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
              <p className="chunkTemp">16&deg;C</p>
            </div>
            <div className="chunk c7">
            <p className="chunkTime">21:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src={clear} />
              <p className="chunkTemp">16&deg;C</p>
            </div>
            <div className="chunk c8">
            <p className="chunkTime">21:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src={partlycloudy} />
              <p className="chunkTemp">16&deg;C</p>
            </div>
          </section>
        </main>
      </div>
    );
  }
export default App;
