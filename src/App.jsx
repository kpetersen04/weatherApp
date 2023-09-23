import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchAside from "./components/SearchAside";
import WeatherResultsContainer from "./components/WeatherResultsContainer";
import FourDayContainer from "./components/FourDayContainer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="main-container">
        <SearchAside />
        <div className="weather-results">
          <WeatherResultsContainer />
          <FourDayContainer />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
