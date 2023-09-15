import partlycloudy from "../img/weather-icons/partlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

function WeatherFullDay({ data }) {
  console.log(data);
  let t1 = data.list[0].main.temp,
    t2 = data.list[1].main.temp,
    t3 = data.list[2].main.temp,
    t4 = data.list[3].main.temp,
    t5 = data.list[4].main.temp,
    t6 = data.list[5].main.temp,
    t7 = data.list[6].main.temp;
  return (
    <>
      <div className="chunk c1">
        <p className="chunkTime">03:00</p>
        <img
          className="threeHourChunk"
          alt="threeHourChunkPic"
          src={partlycloudy}
        />
        <p className="chunkTemp">{t1}&deg;C</p>
      </div>
      <div className="chunk c2">
        <p className="chunkTime">06:00</p>
        <img
          className="threeHourChunk"
          alt="threeHourChunkPic"
          src={partlycloudy}
        />
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
    </>
  );
}

export default WeatherFullDay;
