import React from "react";
import { AppBar, Toolbar, Typography, Switch, SvgIcon } from "@mui/material";
import { SiMicrogenetics } from "react-icons/si";
import { useTranslation } from 'react-i18next'

// eslint-disable-next-line react/prop-types
function Header({ mode, changeMode }) {
  const { t } = useTranslation('header')
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <SvgIcon component={SiMicrogenetics} fontSize="large" inheritViewBox sx={{ mr: 2 }} />
        <Typography variant="h3" component="h1" sx={{ flexGrow: 1 }}>
          {t('title')}
        </Typography>
        <Switch checked={mode} onClick={changeMode} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
