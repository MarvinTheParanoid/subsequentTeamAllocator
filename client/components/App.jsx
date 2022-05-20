// Imports
import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTheme } from "../theme";
import { useLocalStorage } from "../useLocalStorage";

//Component imports
import Header from "./Header";

// App
function App() {
  // Theme
  // create function in theme.js that first checks localStorage, then prefersDarkMode, otherwise false
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setDarkMode] = useLocalStorage('prefersDarkMode', prefersDarkMode);
  const changeMode = () => setDarkMode(!isDarkMode); //would need to update local storage
  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper style={{ height: "100vh" }}>
        <Header mode={isDarkMode} changeMode={changeMode} />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
