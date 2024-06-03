import { useState, KeyboardEvent, ChangeEvent } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Component/Weather";

interface WeatherData {
  weather?: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main?: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind?: {
    speed: number;
    deg: number;
  };
  sys?: {
    country: string;
  };
  name?: string;
}

function App() {
  const [data, setData] = useState<WeatherData>({});
  const [location, setLocation] = useState<string>("");

  const API_KEY = "031f1e4a54bdf90b5c8ae0dd8149ef17";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const searchLocation = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <div className="w-full h-full relative">
        <div className="text-center p-4">
          <input
            type="text"
            className="py-3 px-6 w-[700px] text-lg rounded-full border border-gray-200 text-gray-600 placeholder:text-gray-400 bg-white-600/100 shadow-md focus:outline-none"
            placeholder="Enter Location"
            value={location}
            onChange={handleChange}
            onKeyDown={searchLocation}
          />
        </div>
      </div>
      <Weather weatherData={data} />
    </div>
  );
}

export default App;
