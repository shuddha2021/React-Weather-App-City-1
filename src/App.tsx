import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Result from './components/Result';

const API_KEY = 'daf26c99ddf68a77d25d0c92137da0e5';

interface WeatherData {
  temperature: number;
  feels_like: number;
  wind_speed: number;
  description: string;
  city: string;
}

const App: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [color, setColor] = useState('orange'); // Add this line
  const [city, setCity] = useState(''); // Add this line

  const fetchWeather = async () => { // Remove city parameter
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
              city // Use city state
          )}&units=imperial&appid=${API_KEY}`
      );
      if (response.ok) {
        const data = await response.json();
        const { main, weather, wind, name } = data;
        const temperature = main.temp;
        const feels_like = main.feels_like;
        const wind_speed = wind.speed;
        const description = weather[0].description;
        setWeatherData({ temperature, feels_like, wind_speed, description, city: name });

        // Add this switch statement
        switch (description) {
          case 'clear sky':
            setColor('orange');
            break;
          case 'few clouds':
            setColor('lightblue');
            break;
          case 'scattered clouds':
            setColor('gray');
            break;
          case 'broken clouds':
            setColor('darkgray');
            break;
          case 'shower rain':
            setColor('blue');
            break;
          case 'rain':
            setColor('navy');
            break;
          case 'thunderstorm':
            setColor('purple');
            break;
          case 'snow':
            setColor('white');
            break;
          case 'mist':
            setColor('green');
            break;
          default:
            setColor('orange');
        }
      } else {
        setError(`Error fetching weather: ${response.statusText}`);
      }
    } catch (error: any) {
      console.error('Error fetching weather:', error);
      setError(`Error fetching weather: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="App">
        <h1 style={{backgroundColor: "#e0e0e0", color: "#006400", padding: "20px", width: "100%"}}>Weather</h1> {/* Change the color */}
        <div className="box"> {/* Add this div */}
          <Header title="City" />
          <div className="form"> {/* add this div */}
            <Form onSearch={setCity} city={city} /> {/* Pass city state and setter as props */}
            <button type="submit" onClick={fetchWeather}>Search</button> {/* Move button here and use fetchWeather function */}
          </div>
        </div>
        <Result weatherData={weatherData} loading={loading} error={error} color={color} />
      </div>
  );
};

export default App;
