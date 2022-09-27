import ModalWeather from "./Modal";
import "./TodayWeatherModal.css";
import icon from "../../assets/icons/01d.svg";



import { DeviceThermostat, Air, Opacity } from "@mui/icons-material";
import Icon from '../Icon/Icon'
import TodayData from "../TodayData/TodayData";

function TodayWeatherModal({ active, setActive, city }) {
  
  const getTime = () => {
    const content = [];
    const todayDate = new Date();
    const timeNow = todayDate.getHours();
    const todayDay = todayDate.getDate();
    const yearHow = todayDate.getFullYear();
    const monthNow = todayDate.getMonth();

    for (let i = timeNow; i < timeNow + 24; i++) {
      const rightDate = new Date(yearHow, monthNow, todayDay, i);
      const rightTime = rightDate.getHours() + "";
      
      const timeNowStr = timeNow + "";

      let timeForText;
      if (rightTime === timeNowStr) {
        timeForText = "Now";
      } else if (rightTime.length === 1) {
        timeForText = "0" + rightTime;
      } else if (rightTime.length === 2) {
        timeForText = rightTime;
      } else {
        console.log("error");
      }
      content.push(
        <div className="cardWeather">
          <div className="cardWeatherText">29°C</div>
          <img
            className="cardWeatherImg"
            src={icon}
            alt="cloudy weather"
            height="40px"
          />
          <div className="cardWeatherText">{timeForText}</div>
        </div>
      );
    }
    return content;
  };
  return (
    <ModalWeather active={active} setActive={setActive}>
      <div className="modalWrapp">
        <div className="modalImg">
          <Icon icon={city.weather[0].icon}/>
        </div>
        <h1 className="modalText">{city.name}</h1>
        <TodayData date={city.dt}/>
        <h3 className="modalText">{city.weather[0].main}</h3>
        <h2 className="modalText">{Math.trunc(city.main.temp - 273)}&#176;C</h2>
        <div className="wrapp">
        <div className="todayTemperature">
          <div className="todayMaxTemperature">
            <span className="todayMaxTemperatureText">
              <DeviceThermostat /> <span>MAX Temperature</span>
            </span>
            <span className="todayMaxTemperatureText">{Math.trunc(city.main.temp_max - 273)}&#176;C</span>
          </div>
          <div className="todayMinTemperature">
            <span className="todayMinTemperatureText">
              <DeviceThermostat /> <span>MIN Temperature</span>
            </span>
            <span className="todayMinTemperatureText">{Math.trunc(city.main.temp_min - 273)}&#176;C</span>
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
        <div className="cardsWeather">{getTime()}</div>
      </div>
    </ModalWeather>
  );
}
export default TodayWeatherModal;
