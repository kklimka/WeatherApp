import Background from "../../Components/Background/Background";
import SearchLocation from "../../Components/SearchLocation/SearchLocation";
import WeatherCard from "../../Components/WeatherCards/WeatherCard";
import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Notiflix from "notiflix";
const APIkey = "458e1426f171f3a5b9b842e32522cdba";

function HomePage() {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
  const [futureWeather, setFutureWeather] = useState([]);
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);

  const removeTask = (id) => {
    setCities([...cities.filter((city) => city.id !== id)]);
  };

  function Api(userInput) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${APIkey}`;
    axios
      .get(url)
      .then((res) => {
        if (res) {
          const newItem = {
            id: res.data.id,
            name: res.data.name,
            task: res.data,
          };
          if (cities.length !== 0) {
            cities.map((city) => {
              if (city.id === newItem.id) {
                Notiflix.Notify.failure("This city is on the added list");
                return false;
              } else {
                setCities([...cities, newItem]);
                return true;
              }
            });
          } else {
            setCities([...cities, newItem]);
          }
        }
      })
      .catch((err) => {
        Notiflix.Notify.failure(err.response.statusText);
      });
  }

  const addCity = (userInput) => {
    const result = cities.filter(
      (data) => data.name.toLowerCase() === userInput.toLowerCase()
    );
    if (result.length > 0) {
      Notiflix.Notify.failure("This city is on the added list");
    } else if (result.length === 0) {
      Boolean(isNaN(userInput))
        ? Api(userInput)
        : Notiflix.Notify.failure("Try again");
    }
  };
  const updateCity = (name) => {
    const indexCity = cities.findIndex((x) => x.name === name);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${APIkey}`;
    axios.get(url).then((res) => {
      if (res) {
        const newItem = {
          id: res.data.id,
          name: res.data.name,
          task: res.data,
        };
        const update = [...cities];
        update.splice(indexCity, 1, newItem);
        setCities(update);
      }
    });
  };
  const forecast = (cityName) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${APIkey}`;
    axios.get(url).then((res) => {
      if (res) {
        const newItem = {
          cityName: res.data.city.name,
          weatherList: res.data.list,
        };
        setFutureWeather([newItem]);
      }
    });
  };
  console.log(cities);

  return (
    <div className="homePage">
      <Background />
      <SearchLocation addCity={addCity} />
      <div className="cardsList">
        {cities.map((city) => {
          return (
            <WeatherCard
              city={city.task}
              key={city.id}
              removeTask={removeTask}
              updateCity={updateCity}
              forecast={forecast}
              futureWeather={futureWeather}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
