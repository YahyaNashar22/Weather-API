import partlycloudy from "../img/weather-icons/partlycloudy.svg";
function WeatherNow({ data }) {
  let min = data.list[0].main.temp_max;
  let max = data.list[0].main.temp_max;
  let humidity = data.list[0].main.humidity;
  let pressure = data.list[0].main.pressure;
  //   let min = 1,
  //     max = 1,
  //     humidity = 1,
  //     pressure = 1;
  return (
    <>
      <img
        className="todayForecastPic"
        alt="todayWeatherLogo"
        src={partlycloudy}
      />
      <h1 className="overcast">overcast cloudy</h1>
      <h1 className="temperature">
        Temperature {min}&deg;C to {max}&deg;C
      </h1>
      <p
        className="humidityPressure
        "
      >
        {" "}
        <span style={{ fontWeight: "bold" }}>Humidity </span> {humidity}%{" "}
        <span style={{ fontWeight: "bold" }}>Pressure </span>
        {pressure}
      </p>
    </>
  );
}
export default WeatherNow;
