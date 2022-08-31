import React, { useState, useEffect } from "react";
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
import { login } from "../Redux/LoginFormSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ToastNotification from "./ToastNoatification";

const Login = () => {
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
    username: "",
    role: "",
    password: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    console.log(`state of login`, state);
    dispatch(
      login({
        role: state.role,
      })
    );
    if (state.role === "admin") {
      toast.success(`Logged in Successfully`);
    }
  };

  useEffect(() => {
    dispatch(
      login({
        role: null,
      })
    );
  }, []);

  return (
    <>
      <Grid>
        <div className="formm">
          <Paper elevation={10} style={paperStyle}>
            <h2>Login Here</h2>
            <Typography variant="caption">
              Please fill this form for Login
            </Typography>
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
                <br />
                <h5 className="mt-2">Username</h5>
                <TextField
                  name="username"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Box>
            </div>
            <br />
            <div>
              <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    name="role"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={state.role}
                    label="Role"
                    onChange={handleChange}
                  >
                    <MenuItem value={"admin"}>Admin</MenuItem>
                    <MenuItem value={"customer"}>Customer</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </div>
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
                <br />
                <h5 className="mt-2">Password</h5>
                <TextField
                  name="password"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  onChange={handleChange}
                />
                <br />
              </Box>
            </div>
            <br />
            <Link to={`${state.role === "admin" ? "admin" : state.role === "customer" ? "customer" : "/"}`}>
              <Button
                className="btn btn-dark text-white bg-primary"
                type="Submit"
                value="SignUp"
                onClick={handleClick}
              >
                Login
              </Button>
            </Link>
          </Paper>
        </div>
        <ToastNotification />
      </Grid>
    </>
  );
};
export default Login;
