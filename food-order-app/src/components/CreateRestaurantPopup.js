import React, { useState } from "react";
import {
  Grid,
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../Redux/RestaurantsSlice";
import food from "../food";
import { toast } from "react-toastify";
import ToastNotification from "./ToastNoatification";

const CreateRestaurantPopup = () => {
  const [foodType, setFoodType] = useState(food);

  const dispatch = useDispatch();

  const paperStyle = {
    padding: "50px 150px",
    width: 500,
    margin: "150px auto",
  };
  const paperStyle1 = {
    marginLeft: "0px",
  };
  const [state, setState] = useState({
    Restaurant: "",
    foodType: "",
    food: "",
    price: 0,
  });
  console.log(`state of restaurant`, state);

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const createRestaurant = () => {
    console.log(`inside function`, state);
    dispatch(addRestaurant(state));
    setState({
      Restaurant: "",
      foodType: "",
      food: "",
      price: "",
    });
    toast.success(`restaurant is created`);
  };

  return (
    <>
      <Grid>
        <div className="formm">
          <Paper elevation={10} style={paperStyle}>
            <h2>Create Restaurant</h2>
            <Typography variant="caption">Create Now!</Typography>
            <div className="formmm mt-4">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
                style={paperStyle1}
              >
                <h5 className="mt-2">Restaurant Name</h5>
                <TextField
                  name="Restaurant"
                  id="outlined-basic"
                  label="restaurant name"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </div>
            <br />
            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Food Type
                  </InputLabel>
                  <Select
                    name="foodType"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.foodType}
                    label="foodType"
                    onChange={handleChange}
                  >
                    <MenuItem value={"southIndian"}>southIndian</MenuItem>
                    <MenuItem value={"punjabi"}>punjabi</MenuItem>
                    <MenuItem value={"chinese"}>chinese</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
            <br />

            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Select Food
                  </InputLabel>
                  <Select
                    name="food"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.food}
                    label="foodType"
                    onChange={handleChange}
                  >
                    {state.foodType === "punjabi" &&
                      foodType.punjabi.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>;
                      })}
                    {state.foodType === "southIndian" &&
                      foodType.south.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>;
                      })}
                    {state.foodType === "chinese" &&
                      foodType.chinese.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>;
                      })}
                  </Select>
                </FormControl>
              </Box>
            </div>
            <br />
            <h5 className="mt-2">Enter Price</h5>
            <TextField
              name="price"
              id="outlined-basic"
              label="Price"
              variant="outlined"
              type="number"
              onChange={handleChange}
            />
            <br />
            <br />
            <br />

            <Button
              className="btn btn-primary text-white bg-primary"
              type="Submit"
              value="SignUp"
              onClick={createRestaurant}
            >
              Create Now!
            </Button>
          </Paper>
        </div>
        <ToastNotification/>
      </Grid>
    </>
  );
};
export default CreateRestaurantPopup;
