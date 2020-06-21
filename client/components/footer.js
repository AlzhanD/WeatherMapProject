// import React, { useState } from "react";
// import axios from "axios";
//
// const api = {
//   key: "83fb8779ac45a5ef644e7e9fab1648e0",
//   base: "https://api.openweathermap.org/data/2.5/"
// };
//
// function App() {
//   const [query, setQuery] = useState("");
//   const [weather, setWeather] = useState({});
//
//   const getWeather = query => {
//     axios(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
//         .then(({ data: result }) => {
//           setWeather(result);
//           setQuery("");
//         })
//         .catch(err => {
//           setWeather(err.response.data);
//           setQuery("");
//         });
//   };
//
//   const search = evt => {
//     if (evt.key === "Enter") {
//       getWeather(query);
//     }
//   };
//
//   return (
//       <div>
//         <main>
//           <div className="search-box">
//             <input
//                 type="text"
//                 className="search-bar"
//                 placeholder="Search..."
//                 onChange={e => setQuery(e.target.value)}
//                 value={query}
//                 onKeyPress={search}
//             />
//           </div>
//           {!weather && <div>Введите логин</div>}
//           {weather.cod === 200 ? (
//               <div>
//                 <div className="location-box">
//                   <div className="location">
//                     {weather.name}, {weather.sys.country}
//                   </div>
//                 </div>
//                 <div className="weather-box">
//                   <div className="temp">{Math.round(weather.main.temp)}°c</div>
//                   <div className="weather">{weather.weather[0].main}</div>
//                 </div>
//               </div>
//           ) : (
//               ""
//           )}
//           {weather.cod === "404" ? <div>Такой страны нет</div> : ""}
//         </main>
//       </div>
//   );
// }
//
// export default App;
