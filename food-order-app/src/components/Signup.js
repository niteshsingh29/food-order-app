import React from "react";
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
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Submit } from "../Redux/RegisterFormSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    username: "",
    firstname: "",
    lastname: "",
    role: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
      
    });
  };

  const submit = () => {
    dispatch(Submit(state));
    alert("successfully Register")
    navigate("/login")
    setState({
      username: "",
      firstname: "",
      lastname: "",
      role: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  const paperStyle = {
    padding: "50px 150px",
    width: 500,
    margin: "150px auto",
  };
  const paperStyle1 = {
    marginLeft: "0px",
  };
  
  return (
    <>
      {/* <Grid>
        <div className="formm">
          <Paper elevation={10} style={paperStyle}>
            <h2>Signup Here</h2>
            <Typography variant="caption">
              Please fill this form for Signup
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
                <h5 className="mt-2">First Name</h5>
                <TextField
                  name="firstname"
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                  onChange={handleChange}
                />
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
                <h5 className="mt-2">Last Name</h5>
                <TextField
                  name="lastname"
                  id="outlined-basic"
                  label=" Last Name"
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
                    name='role'
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
                <h5 className="mt-2">Email</h5>
                <TextField
                  name="email"
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  onChange={handleChange}
                />
                <br />
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
                <h5 className="mt-2">Confirm Password</h5>
                <TextField
                  name="confirmpassword"
                  id="outlined-basic"
                  label="Confirm Password"
                  variant="outlined"
                  onChange={handleChange}
                />
                <br />
                <br />
              </Box>
            </div>
            <Button
              onClick={submit}
              className="btn btn-primary text-white bg-primary"
              type="Submit"
              value="SignUp"
            >
              Submit
            </Button>
          </Paper>
        </div>
      </Grid> */}

<section class="vh-100" style="background-color: #eee;">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="text" id="form3Example1c" class="form-control" />
                      <label class="form-label" for="form3Example1c">Your Name</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" id="form3Example3c" class="form-control" />
                      <label class="form-label" for="form3Example3c">Your Email</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4c" class="form-control" />
                      <label class="form-label" for="form3Example4c">Password</label>
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" id="form3Example4cd" class="form-control" />
                      <label class="form-label" for="form3Example4cd">Repeat your password</label>
                    </div>
                  </div>

                  <div class="form-check d-flex justify-content-center mb-5">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                    <label class="form-check-label" for="form2Example3">
                      I agree all statements in <a href="#!">Terms of service</a>
                    </label>
                  </div>

                  <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                  </div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                  class="img-fluid" alt="Sample image"/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
};
export default Signup;
