import Background from "../../Components/Background/Background";
import SearchLocation from "../../Components/SearchLocation/SearchLocation";
import WeatherCard from "../../Components/WeatherCards/WeatherCard"
import "./HomePage.css"
import { useState } from 'react'
function HomePage() {
  const [cities, setCities] = useState([])
  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
        complete: false
      }
      setCities([...cities, newItem])
    }
  }

  const removeTask = (id) => {
    setCities([...cities.filter((city) => city.id !== id)])
  }
  return (
    <div className="homePage">
      <Background/>
      <SearchLocation addTask={addTask}/>
      <div className="cardsList">
      {cities.map((city) => {
        return (
          <WeatherCard
            city={city}
            key={city.id}
            removeTask={removeTask}
            />
        )
      })}
      </div>
    </div>
  );
}

export default HomePage;