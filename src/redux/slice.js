import { createSlice, current } from "@reduxjs/toolkit";
const initialState = {
  userName: "",
  password: "",
  cars: [],
  filteredCars: [],
  from: 0,
  to: 6,
  currentPage: 1,
  perPage: 6,
  user: {},
  selectedCar: null,
  cart: [],
  isAddedToCart: {},
  totalOfTotals: {},
  createInputs: {},
  rangeMin: 0,
  rangeMax: 0,
};
export const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    handleUserName: (state, action) => {
      state.userName = action.payload;
    },
    handlePassword: (state, action) => {
      state.password = action.payload;
    },
    createUser: (state, action) => {
      state.user = {
        ...state.user,
        name: state.userName,
        password: state.password,
      };
    },
    getCars: (state, { payload }) => {
      state.cars = payload;
    },
    getSlider: (state, action) => {
      state.from = state.perPage * state.currentPage - state.perPage;
      state.to = state.from + state.perPage;
      state.filteredCars = state.cars.slice(state.from, state.to);
    },
    nextOne: (state, action) => {
      state.currentPage++;
      state.from = state.perPage * state.currentPage - state.perPage;
      state.to = state.from + state.perPage;
      state.filteredCars = state.cars.slice(state.from, state.to);
    },
    prevOne: (state, action) => {
      state.from = state.from - 6;
      state.to = state.to - 6;
      state.filteredCars = state.cars.slice(state.from, state.to);
    },
    setCarHover: (state, { payload }) => {
      state.selectedCar = payload.id;
    },
    addToCartItems: (state, { payload }) => {
      state.isAddedToCart[payload.name] = payload.id;

      const founded = state.cart.find((item) => item.id === payload.id);
      if (!founded) {
        state.cart.push({
          ...payload,
          quantity: 1,
          newPrice: payload.price,
        });
      }
      for (let i = 0; i < state.cart.length; i++) {
        state.totalOfTotals[payload.name] = +payload.price;
      }
    },

    increaseQnt: (state, { payload }) => {
      let cartItem = state.cart.find((item) => item.id === payload.id);
      cartItem.quantity++;
      let temp = Math.floor(+cartItem.price * cartItem.quantity);
      cartItem.newPrice = temp;

      state.totalOfTotals[payload.name] = temp;
    },
    decreaseQnt: (state, { payload }) => {
      let cartItem = state.cart.find((item) => item.id === payload.id);
      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        cartItem.newPrice = Math.floor(+cartItem.price * cartItem.quantity);
        state.totalOfTotals[payload.name] = cartItem.price * cartItem.quantity;
      } else if (cartItem.quantity === 1) {
        state.cart = state.cart.filter((el) => el.id !== payload.id);
        state.totalOfTotals[payload.name] = 0;
        state.isAddedToCart[payload.name] = null;
      }
    },
    handleCreateInputs: (state, { payload: { type, value } }) => {
      state.createInputs[type] = value;
    },
    createCar: (state, action) => {
      state.cars.push({ ...state.createInputs, id: state.cars.length + 1 });
      state.createInputs.name = "";
      state.createInputs.year = "";
      state.createInputs.price = "";
      state.createInputs.model = "";
      state.createInputs.img = "";
    },
    filterNames: (state, { payload }) => {
      state.from = state.perPage * state.currentPage - state.perPage;
      state.to = state.from + state.perPage;
      state.filteredCars = state.cars.filter((car) =>
        car.name.toLowerCase().includes(payload.toLowerCase())
      );
      if (!payload) {
        state.filteredCars = state.cars.slice(state.from, state.to);
      }
    },
    filterByRange: (state, { payload: { min, max } }) => {
      state.rangeMax = max;
      state.rangeMin = min;

      state.from = state.perPage * state.currentPage - state.perPage;
      state.to = state.from + state.perPage;
      state.filteredCars = state.cars.filter(
        (car) => +car.price >= state.rangeMin && +car.price <= state.rangeMax
      );
      if (!max) {
        state.filteredCars = state.cars.slice(state.from, state.to);
      }
    },
  },
});

export const {
  handleUserName,
  getSlider,
  handlePassword,
  getCars,
  nextOne,
  addToCartItems,
  prevOne,
  setCarHover,
  createUser,
  increaseQnt,
  decreaseQnt,
  filterNames,
  handleCreateInputs,
  createCar,
  filterByRange,
} = slice.actions;

// this is for configureStore
export default slice.reducer;
