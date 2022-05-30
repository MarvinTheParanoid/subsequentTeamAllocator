import React, { useState } from "react";
import { useTranslation } from 'react-i18next'
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types'

// Styles here

function InputSection({ state, setter, translation }) {
  const { t } = useTranslation(translation);
  const [ input, setInput ] = useState("");
  const handleClick = () => {
    setter(...state, { id: uuid(), name: input } )
    setInput("");
  }
  return (
    <Box>
      <Typography>
        {t("title")}
      </Typography>
      {/* should this be a form component */}
      <Box component="form">
        <TextField id={translation} label={t("label")} variant="standard" value={input}/>
        <Button variant="contained" onClick={handleClick}>{t('button')}</Button>
      </Box>
      {/* create chip section */}
      <Box>
        {state.forEach(single => <Chip key={single.id} label={single.name} variant="filled" />)}
      </Box>
    </Box>
  );
}

export default InputSection;

InputSection.propTypes = {
  state: PropTypes.object,
  setter: PropTypes.func,
  translation: PropTypes.string

}