import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Home from "./components/Home";
import Signin from "./components/Signin";
import Car from "./components/Car";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />

          <Route path="/cars/:id" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
