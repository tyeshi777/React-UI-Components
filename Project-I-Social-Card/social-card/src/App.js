import React from "react";
import "./App.css";
import HeaderComponents from "./components/HeaderComponents/HeaderContainer";

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
