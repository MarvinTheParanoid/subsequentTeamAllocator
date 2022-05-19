import React from 'react'
import { AppBar, Toolbar, Typography, Switch, SvgIcon  } from '@mui/material'
import { SiMicrogenetics } from 'react-icons/si'

// eslint-disable-next-line react/prop-types
function Header({mode, changeMode}) {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <SvgIcon component={SiMicrogenetics} fontSize='large' inheritViewBox sx={{mr : 2}}/>
        <Typography variant="h3" component='h1' sx={{ flexGrow: 1 }}>
          Allocar
        </Typography>
        <Switch checked={mode} onClick={changeMode} />
      </Toolbar>
    </AppBar>
  )
}

export default Header