import React, { useState } from "react";
import { handleCreateInputs, createCar } from "../redux/slice.js";
import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";
function NewCar() {
  const dispatch = useDispatch();
  const createInputs = useSelector((s) => s.cars.createInputs);
  const [err, setIsErr] = useState(false);
  const createNewCar = () => {
    if (
      createInputs.name &&
      createInputs.year &&
      createInputs.price &&
      createInputs.model &&
      createInputs.img
    ) {
      dispatch(createCar());
      setIsErr(false);
    } else {
      setIsErr(true);
      setTimeout(() => {
        setIsErr(false);
      }, 3000);
    }
  };
  return (
    <div className="new-car">
      <div>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-primary btns"
        >
          Добавить машину
          <span>
            <i
              style={{ fontSize: "25px", display: "block" }}
              className="bi bi-plus-square-dotted"
            ></i>
          </span>
        </button>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Добавить машину
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body car-modal">
              <input
                name="name"
                type="text"
                className="form-control"
                value={createInputs.name}
                placeholder="Название машины"
                onChange={(e) =>
                  dispatch(
                    handleCreateInputs({
                      type: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                value={createInputs.price}
                name="price"
                placeholder="Цена"
                className="form-control"
                onChange={(e) =>
                  dispatch(
                    handleCreateInputs({
                      type: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                placeholder="Год"
                value={createInputs.year}
                className="form-control"
                name="year"
                onChange={(e) =>
                  dispatch(
                    handleCreateInputs({
                      type: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                placeholder="Модель"
                value={createInputs.model}
                className="form-control"
                name="model"
                onChange={(e) =>
                  dispatch(
                    handleCreateInputs({
                      type: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              />
              <input
                type="text"
                className="form-control"
                placeholder="Ссылка на картинку"
                name="img"
                value={createInputs.img}
                onChange={(e) =>
                  dispatch(
                    handleCreateInputs({
                      type: e.target.name,
                      value: e.target.value,
                    })
                  )
                }
              />

              <button
                className="btn btn-outline-success"
                onClick={createNewCar}
              >
                Добавить
              </button>
              {createInputs.img && (
                <img
                  className="prev-img-car"
                  src={createInputs.img}
                  alt="Cars"
                />
              )}

              {err ? <Error>Заполните все поля!</Error> : ""}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCar;
