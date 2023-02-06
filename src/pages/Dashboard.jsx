import { Box } from "@mui/system";
import React from "react";
import CaseBox from "../components/CaseBox";
import NavBar from "../components/NavBar";
import { caseBoxData } from "../Data/casebox";
import "../styles/styles.css";

const Dashboard = () => {

  return (
    <>
      <NavBar />
      <Box className="caseBoxContainer">
        {caseBoxData.map((e, i) => {
          return <CaseBox key={i} name={e.name} value={e.value} />;
        })}
      </Box>
    </>
  );
};

export default Dashboard;
