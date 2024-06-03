// Weather.tsx
import React from "react";

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

interface WeatherProps {
  weatherData: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ weatherData }) => {
  return (
    <div className="flex p-4">
      {weatherData.weather ? (
        <div className="max-w-md w-full bg-white shadow-3xl rounded-xl p-7 m-5 sm:m-auto relative">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-60 rounded-xl"></div>
          <div className="relative z-10 flex flex-col sm:flex-row justify-between">
            <div className="w-full sm:w-1/2 flex flex-col justify-between items-start my-4">
              <div>
                <p className="text-xl font-bold mt-10 text-gray-500">
                  {weatherData.name}, {weatherData.sys?.country}
                </p>
                <p className="text-sm text-gray-700">
                  {weatherData.weather[0].description}
                </p>
              </div>
              <div>
                <h1 className="text-4xl sm:text-6xl mb-10 font-semibold text-white">
                  {weatherData.main?.temp?.toFixed()} °C
                </h1>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-between items-center sm:items-end">
              <div className="relative mb-4 sm:mb-0">
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`}
                  alt="Weather Icon"
                  className="w-24 h-24 sm:w-32 sm:h-32"
                />
              </div>
              <div className="flex flex-col gap-y-4 mx-auto text-xs w-full sm:w-auto bg-white bg-opacity-60 p-4 rounded-lg">
                <div className="flex justify-between gap-x-16">
                  <p className="text-gray-700">Feels Like</p>
                  <p className="font-bold text-gray-900">
                    {weatherData.main?.feels_like?.toFixed()} °C
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Humidity</p>
                  <p className="font-bold text-gray-900">
                    {weatherData.main?.humidity}%
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Wind Speed</p>
                  <p className="font-bold text-gray-900">
                    {weatherData.wind?.speed?.toFixed()} KPH
                  </p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Pressure</p>
                  <p className="font-bold text-gray-900">
                    {weatherData.main?.pressure?.toFixed()} hPa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default Weather;
