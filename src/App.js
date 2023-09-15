import { useState } from "react";
// import { useEffect } from "react";
// import Search from "./components/Search";
import fakeWeather from "./data/FakeWeather.json";
// import SayHi, { SayHello } from "./components/WeatherItem";
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
// let i = http://api.openweathermap.org/data/2.5/forecast?q=${searchInp}&cnt=8&units=metric&appid=${api_key}

// function WeatherNow(data){
// // const data = props.data;
// console.log(data)
//   let min = FakeWeather.list[0].main.temp_max;
//   let max = FakeWeather.list[0].main.temp_max;
//   let humidity = FakeWeather.list[0].main.humidity;
//   let pressure = FakeWeather.list[0].main.pressure;
//   return(
//     <>
//     <img className="todayForecastPic" alt="todayWeatherLogo" src={partlycloudy} />
//     <h1 className="overcast">overcast cloudy</h1>
//     <h1 className="temperature">Temperature  {min}&deg;C to {max}&deg;C</h1>
//     <p className="humidityPressure
//     "> <span style={{fontWeight:"bold"}}>Humidity  </span> {humidity}% <span  style={{fontWeight:"bold"}}>Pressure  </span>{pressure}</p>
//     </>
//   )
// }

function App() {
  var api_key = "c1a97940da358fee0b27f79c504f0cf1";
  const [noresult, setRresult] = useState("search for a country");
  const [lalues, SetLalues] = useState("london");
  const [data, setData] = useState(null);
  const fakeData = fakeWeather;
  console.log(fakeData);
  const handleClick2 = () => {
    SetLalues(document.getElementById("c").value);
    // setData(data)
  };
  const handleClick = () => {
    setRresult(`the results for ${document.getElementById("c").value} are:`);
  };

  // useEffect(() => {
  //   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${lalues}&cnt=8&units=metric&appid=${api_key}`)
  //   .then (response=>{return response.json()})
  //   .then (data=>{
  //     setData(data);
  //     console.log(data);
  //   });
  // },[lalues]);

  // console.log(FakeWeather)
  //////////// fetch api /////////////////////
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${lalues}&cnt=8&units=metric&appid=${api_key}`)
  //   .then ((response)=>response.json())
  //   .then ((data)=>{
  //     setData(data);
  //     console.log(data);
  //   });
  // },[lalues]);
  ///////////// End fetch ///////////////////////

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
        <main>
          <section className="todayForecast chunk">
            <WeatherNow data={fakeWeather} />
          </section>
          <section className="twentyFourHour">
            <WeatherFullDay />
          </section>
        </main>
      </>
    </div>
  );
}
export default App;
