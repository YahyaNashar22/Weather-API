import partlycloudy from "../img/weather-icons/partlycloudy.svg"
import clear from "../img/weather-icons/clear.svg"

function WeatherFullDay(){
    let t1=8 ,t2=9 , t3=14 , t4=17 , t5=18 , t6=16 , t7=16 , t8=16;
    return(
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

    export default WeatherFullDay