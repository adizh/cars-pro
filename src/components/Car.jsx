import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

function Car() {
  const { id } = useParams();
  const cars = useSelector((s) => s.cars.cars);
  let car = cars.find((elem) => elem.id === +id);

  useEffect(() => {
    // fetch(`http://localhost:8000/cars/${id}`)
    //   .then((res) => res.json())
    //   .then((car) => setCar(car));
  }, [id]);

  return (
    <>
      <div className="car">
        <div className="car-block-img">
          <img className="car-img" src={`${car.img}`} alt="" />
        </div>
        <div className="car-texts">
          <p className="car-name">{car.name}</p>
          <p className="car-price">Цена: {car.price}</p>
          <p className="car-year">Год: {car.year}</p>
          <p className="car-year">Модель: {car.model}</p>
        </div>
      </div>
      <button className="btn btn-warning router-link">
        {" "}
        <Link to="/home">На главную</Link>
      </button>
    </>
  );
}

export default Car;
