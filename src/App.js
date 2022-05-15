import Main from "./pages/Main";
import First from "./pages/First";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function App() {
  const [modal, setModal] = useState(false);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    name: "",
    temperature: "",
    wind: "",
    clouds: "",
    humidity: "",
    preseption: "",
    icon: "",
  });
  const changeCity = (e) => setCity(e.target.value);
  const changeVisible = () => setModal(true);

  const showWeather = () => {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fae0391145d304dad13a81375e46cb99`;
    axios.get(apiUrl).then((resp) => {
      console.log(resp);
      setWeather({
        name: resp.data.name,
        temperature: Math.round(resp.data.main.temp - 273.15),
        wind: resp.data.wind.speed,
        clouds: resp.data.weather[0].main,
        humidity: resp.data.main.humidity,
        preseption: Math.round((resp.data.main.pressure * 3) / 4),
        icon: resp.data.weather[0].icon,
      });
    });
    setModal(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/Main"
          element={
            <Main
              city={city}
              change={changeCity}
              show={showWeather}
              weather={weather}
              visible={modal}
              changeVisible={changeVisible}
            />
          }
        ></Route>
        <Route path="/" element={<First />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
