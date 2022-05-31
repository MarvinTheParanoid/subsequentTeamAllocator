// Imports
import React, { useMemo } from "react";
import "../i18n";
import { CssBaseline, ThemeProvider, Grid, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTheme } from "../theme";
import { useLocalStorage } from "../hooks/useLocalStorage";

//Component imports
import Header from "./Header";
import Sidebar from "./Sidebar";
import InputSection from "./InputSection";
import Main from './Main';

// App
function App() {
  // Theme
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [isDarkMode, setDarkMode] = useLocalStorage("prefersDarkMode", prefersDarkMode);
  const changeMode = () => setDarkMode(!isDarkMode);
  const theme = useMemo(() => getTheme(isDarkMode), [isDarkMode]);

  // Core states
  const [teams, setTeams] = useLocalStorage("teams", []);
  const [people, setPeople] = useLocalStorage("people", []);
  const [history, setHistory] = useLocalStorage("history", []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ height: "100vh", display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'flex-start'}}>
        <Header mode={isDarkMode} changeMode={changeMode} />
        <Box sx={{display: 'flex', direction: 'row', alignItems: 'stretch', outline: '1px solid yellow'}}>
          <Sidebar>
            <InputSection state={teams} setter={setTeams} translation="teams" />
            <InputSection state={people} setter={setPeople} translation="people" />
          </Sidebar>
          <Main sx={{flex: 'auto'}}/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

// Sidebar should have set width above breakpoint (width xs or sm??)
//  below this should be max width