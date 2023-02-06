import { Box } from "@mui/system";
import React from "react";
import "../styles/styles.css";

const CaseBox = ({ name, value }) => {
  return (
    <Box className="caseBoxInner">
      <Box className="nameBox">{name}</Box>
      <Box className="valueBox">{value}</Box>
    </Box>
  );
};

export default CaseBox;
