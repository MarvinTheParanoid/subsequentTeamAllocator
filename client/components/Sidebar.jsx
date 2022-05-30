import React from "react";
import { Box, Grid } from "@mui/material";
import PropTypes from "prop-types";

export default function Sidebar({ children }) {
  return (
    <Grid item xs={12} md={4} sx={{display: "flex", flexDirection: "column", alignItems: 'stretch', padding: 2 }}>
      <Box sx={{border: 1, borderRadius: 1, padding: 2 }}>
        {children}
      </Box>
    </Grid>
  );
}

Sidebar.propTypes = {
  children : PropTypes.node,
};
