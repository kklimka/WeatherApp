import ModalWeather from "./Modal";
import "./TodayWeatherModal.css";
import { DeviceThermostat, Air, Opacity } from "@mui/icons-material";
import Icon from "../Icon/Icon";
import TodayData from "../TodayData/TodayData";
import WeatherForecast from "../WeatherForecast/WeatherForecast";



function TodayWeatherModal({ active, setActive, city, futureWeather }) {
  return (
    <ModalWeather active={active} setActive={setActive}>
      <div className="modalWrapp">
        <div className="modalImg">
          <Icon icon={city.weather[0].icon} height='64px' />
        </div>
        <h1 className="modalText">{city.name}</h1>
        <TodayData date={city.dt} />
        <h3 className="modalText">{city.weather[0].main}</h3>
        <h2 className="modalText">{Math.trunc(city.main.temp - 273)}&#176;C</h2>
        <div className="wrapp">
          <div className="todayTemperature">
            <div className="todayMaxTemperature">
              <span className="todayMaxTemperatureText">
                <DeviceThermostat /> <span>MAX Temperature</span>
              </span>
              <span className="todayMaxTemperatureText">
                {Math.trunc(city.main.temp_max - 273)}&#176;C
              </span>
            </div>
            <div className="todayMinTemperature">
              <span className="todayMinTemperatureText">
                <DeviceThermostat /> <span>MIN Temperature</span>
              </span>
              <span className="todayMinTemperatureText">
                {Math.trunc(city.main.temp_min - 273)}&#176;C
              </span>
            </div>
          </div>
          <div className="todayIndicators">
            <div className="todayHam">
              <span className="todayHamText">
                <Opacity /> <span>Ham</span>
              </span>
              <span>{city.main.humidity} %</span>
            </div>
            <div className="todayWind">
              <span className="todayWindText">
                <Air /> <span>Wind</span>
              </span>
              <span>{Math.trunc(city.wind.speed * 3.6)} km/h</span>
            </div>
          </div>
        </div>
        <div className="cardsWeather">
        <div className="cardWeather">
          <div className="cardWeatherText">{Math.trunc(city.main.temp - 273)}&#176;C</div>
          <Icon icon={city.weather[0].icon} height='40px'/>
          <div className="cardWeatherText">Now</div>
        </div>
        <WeatherForecast futureWeather={futureWeather}/>
          </div>
      </div>
    </ModalWeather>
  );
}
export default TodayWeatherModal;
