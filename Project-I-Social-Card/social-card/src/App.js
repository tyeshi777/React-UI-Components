import React from "react";
import "./App.css";
import HeaderComponents from "./components/HeaderComponents/HeaderContainer";
import CardComponents from "./components/CardComponents/CardContainer";
import FooterComponents from "./components/FooterComponents/Footer";

const App = () => {
  return (
    <div id="root">
      <HeaderComponents />
      <CardComponents />
      <FooterComponents />
    </div>
  );
};

export default App;
