import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Box, Button, Chip, TextField, Typography } from "@mui/material";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import ChipSection from "./ChipSection";

// Styles here

export default function InputSection({ state, setter, translation }) {
  const [input, setInput] = useState("");
  const handleInput = (e) => setInput(e.target.value)
  const handleDelete = (id) => setter(state.filter(single => single.id !== id))

  const handleSubmit = () => {
    setter([...state, { id: uuid(), name: input }]);
    setInput("");
  };

  const { t } = useTranslation(translation);

  return (
    <Box>
      <Typography variant="h4">{t("title")}</Typography>
      {/* should this be a form component */}
      <Box component="form" onSubmit={handleSubmit}>
        <TextField id={translation} label={t("label")} variant="standard" value={input} onChange={handleInput}/>
        <Button variant="contained" type="submit">
          {t("button")}
        </Button>
      </Box>
      {/* create chip section */}
      <ChipSection names={state} handleDelete={handleDelete} />
    </Box>
  );
}

InputSection.propTypes = {
  state: PropTypes.array,
  setter: PropTypes.func,
  translation: PropTypes.string,
};
