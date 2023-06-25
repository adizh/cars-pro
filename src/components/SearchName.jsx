import React from "react";
import { useDispatch } from "react-redux";
import { filterNames, getSlider } from "../redux/slice.js";
function SearchName() {
  const dispatch = useDispatch();

  const filterByName = (elem) => {
    dispatch(filterNames(elem.target.value));
    // dispatch(getSlider());
  };
  return (
    <div className="search-name">
      <input
        onKeyUp={(e) => filterByName(e)}
        type="text"
        className="form-control inputs"
        placeholder="Искать по имени"
      />
    </div>
  );
}

export default SearchName;
