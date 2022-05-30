import React from "react";
import { Paper, Typography } from "@mui/material";

function Sidebar({children}) {
  return (
    <Paper sx={{ backgroundColor: "blue" }}>
      {children}
    </Paper>
  );
}

export default Sidebar;
