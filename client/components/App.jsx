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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setDarkMode] = useLocalStorage('prefersDarkMode', prefersDarkMode);
  const changeMode = () => setDarkMode(!isDarkMode); 
  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  // Core states
  const [ teams, setTeams ] = useLocalStorage('teams', []);
  const [ people, setPeople ] = useLocalStorage('people', []);
  const [ history, setHistory ] = useLocalStorage('history', []);

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
