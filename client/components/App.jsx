// Imports
import React, { useState, useMemo } from "react";
import { CssBaseline, ThemeProvider, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTheme } from "../theme";

//Component imports
import Header from "./Header";

// App
function App() {
  // Theme
  // create function in theme.js that first checks localStorage, then prefersDarkMode, otherwise false
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [ darkMode, setDarkMode ] = useState(() => prefersDarkMode);
  const changeMode = () => setDarkMode(!darkMode) //would need to update local storage
  const theme = useMemo(() => getTheme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: "100vh" }}>
        <Header mode={darkMode} changeMode={changeMode} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
