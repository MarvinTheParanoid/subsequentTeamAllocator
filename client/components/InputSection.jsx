import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import ChipSection from "./ChipSection";

// Styles here

export default function InputSection({ state, setter, translation }) {
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value);
  const handleDelete = (id) => setter(state.filter((single) => single.id !== id));

  const handleSubmit = (e) => {
    e.preventDefault()
    setter([...state, { id: uuid(), name: input }]);
    setInput("");
  };

  const { t } = useTranslation(translation);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
      <Typography variant="h5">{t("title")}</Typography>
      {/* should this be a form component */}
      <Box component="form" onSubmit={handleSubmit} sx={{alignSelf: "center"}}>
        <TextField
          id={translation}
          // label={t("label")}
          placeholder={t("label")}
          variant="standard"
          value={input}
          onChange={handleInput}
          size="small"
        />
        <Button variant="contained" type="submit" disabled={!input} size="small">
          {t("button")}
        </Button>
      </Box>
      {/* create chip section */}
      <ChipSection names={state} handleDelete={handleDelete} size="small"/>
    </Box>
  );
}

InputSection.propTypes = {
  state: PropTypes.array,
  setter: PropTypes.func,
  translation: PropTypes.string,
};
