import { Box } from "@mui/system";
import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const NavBar = () => {
  return (
    <Box className="navContainer">
      <Box className="innerNavContainer">
        <DensityMediumIcon />
        <img
          src="https://web.bizofficer.com/subscription/icon-logo.png"
          alt=""
        />
        <Box>Dashboard</Box>
      </Box>
      <Box>
        <LogoutIcon />
      </Box>
    </Box>
  );
};

export default NavBar;
