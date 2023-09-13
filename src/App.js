import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Brand from "./Components/Brand";
import Arrivals from "./Components/Arrivals";
import Sale from "./Components/Sale";
import Favourite from "./Components/Favourite";
import Voucher from "./Components/Voucher";
import Newsletter from "./Components/Newsletter";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Brand />
      <Arrivals />
      <Sale />
      <Favourite />
      <Voucher />
      <Newsletter />
    </div>
  );
}

export default App;
