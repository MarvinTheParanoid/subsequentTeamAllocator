import React from "react";
import { Box, Paper } from "@mui/material";
import PropTypes from "prop-types";

export default function Sidebar({ children }) {
  return (
    <Box sx={{height: "100%", padding: 5, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', minWidth: 'max-content', width: 'min(30%, 40em)' }}>
      <Paper sx={{padding: 5, border: 1, minWidth: 'max-content', width: 0.85}}>
        {children}
      </Paper>
    </Box>
  );
}

Sidebar.propTypes = {
  children : PropTypes.node,
};
