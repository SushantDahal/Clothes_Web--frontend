import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Brand from "./Components/Brand";
import Arrivals from "./Components/Arrivals";
import Sale from "./Components/Sale";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Brand />
      <Arrivals />
      <Sale />
    </div>
  );
}

export default App;
