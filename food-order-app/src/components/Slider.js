import * as React from "react";
import { useState } from "react";
import { Box } from "@material-ui/core";
import { Slider } from "@material-ui/core";

function valuetext(value) {
  return value;
}

const RangeSlider = (props) => {
  const [value, setValue] = useState([350, 800]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  props.setRangeValue(value);
  console.log(`value`, value);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Price range"}
        min={5}
        max={1000}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};
export default RangeSlider;
