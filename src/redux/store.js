import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import Reducer from "./slice.js";
const persistConfig = {
  key: "root",
  storage,
  blacklist: [
    "from",
    "cart",
    "isAddedToCart",
    "to",
    "userName",
    "password",
    "selectedCar",
    "filteredCars",
    "createInputs",
    "totalOfTotals",
    "currentPage",
    "perPage",
  ],
};
const persistedReducer = persistReducer(persistConfig, Reducer);
const store = configureStore({
  reducer: {
    cars: persistedReducer,
  },
  middleware: [thunk],
});
export default store;
export const persistor = persistStore(store);
