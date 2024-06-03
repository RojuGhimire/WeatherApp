import { useState } from "react";
import "./App.css";
import axios from "axios";
import Weather from "./Component/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "031f1e4a54bdf90b5c8ae0dd8149ef17";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}
 `;
  const searchLocation = (e) => {
    if (e.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
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
            onChange={(e) => setLocation(e.target.value)}
            onKeyDownCapture={searchLocation}
          />
        </div>
      </div>
      <Weather weatherData = {data} />
    </div>
  );
}

export default App;
