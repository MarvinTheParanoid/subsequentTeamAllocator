import React from "react";
import { Box, Chip } from "@mui/material";
import PropTypes from "prop-types";

export default function ChipSection({ names, handleDelete = null, ...props }) {
  return (
    <Box width="100%" minHeight={75} sx={{display: 'flex', flexWrap: 'wrap'}}>
      {names.map((each) => (
        <Chip
          key={each.id}
          label={each.name}
          variant="filled"
          onDelete={() => handleDelete(each.id)}
          {...props}
          sx={{margin: '0.5em'}}
        />
      ))}
    </Box>
  );
}

ChipSection.propTypes = {
  names: PropTypes.array,
  handleDelete: PropTypes.func,
};
