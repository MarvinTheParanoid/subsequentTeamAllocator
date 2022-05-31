import React from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";

export default function Main({children}) {
  return (
    <Box sx={{ flex: "auto", padding: 5, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} component='main'>
      {children}
    </Box>
  );
}


Main.propTypes = {
  children: PropTypes.node,
};

