import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCars,
  nextOne,
  prevOne,
  getSlider,
  setCarHover,
  addToCartItems,
} from "../redux/slice.js";
import { Link } from "react-router-dom";
function Cars() {
  const from = useSelector((s) => s.cars.from);
  const to = useSelector((s) => s.cars.to);
  const currentPage = useSelector((s) => s.cars.currentPage);
  const perPage = useSelector((s) => s.cars.perPage);
  const cars = useSelector((s) => s.cars.cars);
  const isAddedToCart = useSelector((s) => s.cars.isAddedToCart);
  const dispatch = useDispatch();
  const selectedCar = useSelector((s) => s.cars.selectedCar);
  useEffect(() => {
    // fetch("http://localhost:8000/cars")
    //   .then((res) => res.json())
    //   .then((data) => dispatch(getCars(data)));
    dispatch(getSlider());
  }, []);

  let filteredCars = useSelector((s) => s.cars.filteredCars);
  const nextSlider = () => {
    dispatch(nextOne());
  };
  const handleMouseOver = (e) => {
    dispatch(setCarHover(e));
  };

  const addToCart = (car) => {
    dispatch(addToCartItems(car));
  };

  return (
    <div id="Каталог" className="cars">
      <button
        disabled={from === 0 ? true : false}
        className="btn btn-danger slider-btns-left"
        onClick={() => dispatch(prevOne())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-left"
          viewBox="0 0 16 16"
        >
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
        </svg>
      </button>
      <button
        className="btn btn-danger slider-btns-right"
        disabled={cars.length <= to ? true : false}
        onClick={nextSlider}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-caret-right"
          viewBox="0 0 16 16"
        >
          <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
        </svg>
      </button>
      <div className="cars-block">
        {filteredCars.map((car) => (
          <div
            className="car"
            onMouseOver={() => handleMouseOver(car)}
            key={car.id}
            style={{
              background: `url(${car.img}) center no-repeat`,
              backgroundSize: "cover",
            }}
          >
            <p className="car-name">{car.name.toUpperCase()}</p>
            <p className="car-price">Цена: {car.price}</p>
            <p className="car-year">Год: {car.year}</p>

            {selectedCar === car.id ? (
              <Link to={`/cars/${car.id}`} className="car-info">
                Подробнее
              </Link>
            ) : (
              ""
            )}
            <div className="cart-add">
              {isAddedToCart[car.name] !== car.id ? (
                <button
                  onClick={() => addToCart(car)}
                  className="btn btn-primary"
                >
                  В корзину{" "}
                  <i
                    className="bi bi-basket2"
                    style={{
                      color: "white",
                      fontSize: "26px",
                    }}
                  ></i>
                </button>
              ) : (
                <button className="btn btn-danger">Добавлено</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cars;
