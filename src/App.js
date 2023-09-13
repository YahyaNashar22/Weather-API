import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

function App(){
    return (
      <div className="app">
        <nav>
          <input className="inputCity"  placeholder="Type a city name" />
          <button className="findWeather" type="submit">FIND WEATHER</button>
        </nav>
        <main>
          <div className="todayForecast">
          <img className="todayForecastPic" alt="todayWeatherLogo" src="https://placekitten.com/200/200" />
          <h1 className="temperature">Temperature 10&deg;C to 11&deg;C</h1>
          <p className="humidityPressure
          "> <span style={{fontWeight:"bold"}}>Humidity</span> 78% <span  style={{fontWeight:"bold"}}>Pressure</span> 1009.48</p>
          </div>
          <div className="twentyFourHour">
            <div className="chunk1">
              <p className="chunkTime">03:00</p>
             <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/100/100" />
              <p className="chunkTemp">8&deg;C</p>
            </div>
            <div className="chunk2">
            <p className="chunkTime">06:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/101/101" />
              <p className="chunkTemp">9&deg;C</p>
            </div>
            <div className="chunk3">
            <p className="chunkTime">09:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/99/99" />
              <p className="chunkTemp">14&deg;C</p>
            </div>
            <div className="chunk4">
            <p className="chunkTime">12:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/102/102" />
              <p className="chunkTemp">17&deg;C</p>
            </div>
            <div className="chunk5">
            <p className="chunkTime">15:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/102/103" />
              <p className="chunkTemp">18&deg;C</p>
            </div>
            <div className="chunk6">
            <p className="chunkTime">18:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/103/103" />
              <p className="chunkTemp">16&deg;C</p>
            </div>
            <div className="chunk7">
            <p className="chunkTime">21:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/104/100" />
              <p className="chunkTemp">16&deg;C</p>
            </div>
            <div className="chunk8">
            <p className="chunkTime">21:00</p>
            <img className="threeHourChunk" alt="threeHourChunkPic" src="https://placekitten.com/102/100" />
              <p className="chunkTemp">16&deg;C</p>
            </div>
          </div>
        </main>
      </div>
    );
  }
export default App;
