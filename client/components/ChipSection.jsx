import React from 'react';
import { Box, Chip } from '@mui/material';
import PropTypes from "prop-types";

export default function ChipSection({names, handleDelete}) {
  return (
    <Box width="100%" minHeight={75}>
      {names.map((each) => (
        <Chip key={each.id} label={each.name} variant="filled" onDelete={() => handleDelete(each.id)}/>
      ))}
    </Box>
  )
}

ChipSection.propTypes = {
  names: PropTypes.array,
  handleDelete: PropTypes.func,
};
