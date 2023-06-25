import React from "react";
import Links from "./Links";
import About from "./About";
import About2 from "./About2";
import Cars from "./Cars";
import Contacts from "./Contacts";
import Carts from "./Carts";
import NewCar from "./NewCar";
import SearchName from "./SearchName";
import PriceRange from "./PriceRange";

function Home() {
  return (
    <>
      <div id="Главная" className="home">
        <Links />
        <Carts />
        <NewCar />

        <h1 className="home-title">Покупка машин</h1>
        <h5 className="home-subtitle">По вашему вкусу</h5>
      </div>

      <About />
      <About2 />
      <SearchName />
      <PriceRange />
      <Cars />
      <Contacts />
    </>
  );
}

export default Home;
