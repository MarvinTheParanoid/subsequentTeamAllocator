import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function Sidebar({ children }) {
  return (
    <Box sx={{border: 1, borderRadius: 1, padding: 2, height: "100%" }}>
      {children}
    </Box>
  );
}

Sidebar.propTypes = {
  children : PropTypes.node,
};
