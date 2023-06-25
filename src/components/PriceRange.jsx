import React from "react";
import MultiRangeSlider from "react-js-multi-range-sliders";
import { useDispatch } from "react-redux";
import { filterByRange } from "../redux/slice.js";

function PriceRange() {
  const dispatch = useDispatch();
  const handleRange = (min, max) => {
    dispatch(filterByRange({ min, max }));
  };
  return (
    <div>
      <MultiRangeSlider
        title="Фильтры по цене"
        min={0}
        max={10000}
        onChange={({ min, max }) => handleRange(min, max)}
      />
    </div>
  );
}

export default PriceRange;
