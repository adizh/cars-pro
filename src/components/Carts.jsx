import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseQnt, decreaseQnt } from "../redux/slice.js";
function Carts() {
  const carts = useSelector((s) => s.cars.cart);
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(false);
  const totalOfTotals = useSelector((s) => s.cars.totalOfTotals);

  let resOfSum = Object.values(totalOfTotals).reduce(
    (acc, rec) => acc + rec,
    0
  );
  return (
    <div className="carts">
      <button
        onClick={() => setToggle(!toggle)}
        className="btn btn-primary cart-icon"
        type="button"
      >
        <i
          className="bi bi-basket2"
          style={{
            color: "white",
            fontSize: "26px",
          }}
        ></i>
      </button>

      <div id={toggle ? "test-offcanvas" : ""}>
        {/* <span onClick={() => setToggle(false)} className="close-canvas">
          X
        </span> */}
        {toggle && (
          <div className="res-sum">Общая сумма: ${Math.floor(resOfSum)}</div>
        )}
        {toggle &&
          carts.map((cart) => (
            <div className="cart" key={cart.id}>
              <div className="cart-block-img">
                <img className="cart-img" src={`${cart.img}`} alt="" />
              </div>
              <div className="cart-texts">
                <p className="cart-name">{cart.name}</p>
                <p className="cart-price">Цена: {Math.floor(+cart.newPrice)}</p>
                <p className="cart-year">Год: {cart.year}</p>
                <p className="cart-year">Модель: {cart.model}</p>
                <div className="cart-btns">
                  {" "}
                  <button
                    className="btn btn-warning"
                    onClick={() => dispatch(increaseQnt(cart))}
                  >
                    +
                  </button>
                  <span>{cart.quantity}</span>
                  <button
                    onClick={() => dispatch(decreaseQnt(cart))}
                    className="btn btn-warning"
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Carts;
