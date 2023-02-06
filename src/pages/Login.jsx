import React from "react";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = () => {
    if (username === "tester@bizofficer.com" && password === "123456") {
      navigate("/dashboard");
    } else {
      alert("Please Enter valid credentials");
    }
  };

  return (
    <Box className="loginContainer">
      <Box
        className="formContainer"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <img src="https://web.bizofficer.com/subscription/logo.png" alt="" />
        <TextField
          id="outlined-basic"
          className="inputField"
          label="Phone or Email"
          variant="outlined"
          value={username}
          onChange={handleUsernameChange}
          fullWidth
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          value={password}
          onChange={handlePasswordChange}
          type="password"
          fullWidth
        />
        <Button variant="contained" onClick={handleSubmit}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
