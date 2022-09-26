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
  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);
  const removeTask = (id) => {
    setCities([...cities.filter((city) => city.id !== id)]);
  };

  function Api(userInput) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${APIkey}`;
    axios.get(url).then((res) => {
    
      if (res) {
        const newItem = {
          id: res.data.id,
          name: res.data.name,
          task: res.data,
        };
        setCities([...cities, newItem]);
      }
      
      
      
    });
  }

  const addCity = (userInput) => {
    const result = cities.filter(
      (data) => data.name.toLowerCase() === userInput.toLowerCase()
    );
    if (result.length > 0) {
      Notiflix.Notify.failure("This city is in the added list");

    } else if (result.length === 0) {
      Api(userInput);
    }
   
    
  };

  console.log(cities);

  return (
    <div className="homePage">
      <Background />
      <SearchLocation addTask={addCity} />
      <div className="cardsList">
        {cities.map((city) => {
          return (
            <WeatherCard
              city={city.task}
              key={city.id}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;
