import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Brand from "./Components/Brand";
import Arrivals from "./Components/Arrivals";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Brand />
      {/* <Arrivals /> */}
    </div>
  );
}

export default App;
