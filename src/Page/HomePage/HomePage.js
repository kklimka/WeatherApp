import Background from "../../Components/Background/Background";
import SearchLocation from "../../Components/SearchLocation/SearchLocation";
import WeatherCard from "../../Components/WeatherCards/WeatherCard";
import "./HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
const APIkey = "458e1426f171f3a5b9b842e32522cdba";
function HomePage() {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );
 
  const addTask = (userInput) => {
   
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${APIkey}`;
    axios.get(url).then((res) => {
      if (res.data) {
        const newItem = {
          id: res.data.id,
          task: res.data,
        };
        setCities([...cities, newItem]);
      }
    });
    
  };



  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(cities));
  }, [cities]);
  const removeTask = (id) => {
    setCities([...cities.filter((city) => city.id !== id)]);
  };

  console.log(cities);

  return (
    <div className="homePage">
      <Background />
      <SearchLocation addTask={addTask} />
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
