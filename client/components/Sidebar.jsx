import React from "react";
import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

export default function Sidebar({ children }) {
  return (
    <Box
      sx={{
        height: "100%",
        padding: 5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        // minWidth: "20em",
        width: "min(33%, 40em)",
      }}
    >
      <Paper sx={{ padding: 5, border: 1, height: "100%"}}>{children}</Paper>
    </Box>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node,
};
