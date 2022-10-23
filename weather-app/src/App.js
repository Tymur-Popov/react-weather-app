import React, { useState, useEffect } from "react";
import WeatherApp from "./components/WeatherApp";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return <div>
    {loading ? <Loader /> 
    : <WeatherApp />}
    </div>;
}

export default App;
