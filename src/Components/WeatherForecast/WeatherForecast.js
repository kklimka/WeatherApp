import "../Modal/TodayWeatherModal.css";
import Icon from "../Icon/Icon";
function WeatherForecast({ futureWeather }) {
  if (futureWeather.length !== 0) {
    const weatherForecast = [...futureWeather[0].weatherList];
    weatherForecast.length = 12;
    return (
      <div className="cardWrapp">
        {weatherForecast.map((e) => {
          const futureDate = e.dt;
          const rightDate = new Date(futureDate*1000);
          const rightHours = rightDate.getHours()+'';
          let timeForText;
          if (rightHours.length === 1) {
            timeForText = "0" + rightHours;
          } else if (rightHours.length === 2) {
            timeForText = rightHours;
          } 
          return (
            <div className="cardWeather" key={Math.random()}>
              <div className="cardWeatherText">
                {Math.trunc(e.main.temp - 273)}&#176;C
              </div>
              <div className="cardWeatherImg">
                <Icon icon={e.weather[0].icon} height="40px" />
              </div>

              <div className="cardWeatherText">{timeForText}</div>
            </div>
          );
        })}
      </div>
    );
   


  }
}
export default WeatherForecast;
