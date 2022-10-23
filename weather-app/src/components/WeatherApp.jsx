import React, { useState } from "react";
import axios from "axios";
import {RiSearch2Line} from 'react-icons/ri'

function WeatherApp() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=7e1b97d21f4bc2022c6e8c497e7f3fec`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };

  const onButtonClick = (event) => {
    axios.get(url).then((response) => {
      setData(response.data);
    });
    setLocation("");
  }

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Введите название города..."
          type="text"
        />
        <button
        onClick={onButtonClick}
        className="search-buton">
          <RiSearch2Line
          size={36}
          color='#f8f8f8'
          />
        </button>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels">
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p className="bold">Ощущается как</p>
            </div>
            <div className="humidity">
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p className="bold">Влажность</p>
            </div>
            <div className="wind">
              {data.wind ? <p className="bold">{data.wind.speed} м/с</p> : null}
              <p className="bold">Скорость ветра</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;