// Imports
import React, { useMemo } from "react";
import "../i18n";
import { CssBaseline, ThemeProvider, Grid, Box, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTheme } from "../theme";
import { useLocalStorage } from "../hooks/useLocalStorage";

//Component imports
import Header from "./Header";
import Sidebar from "./Sidebar";
import InputSection from "./InputSection";

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
      <Box style={{ height: "100vh" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          height={"100%"}
        >
          <Header mode={isDarkMode} changeMode={changeMode} />
          <Grid item xs container direction="row" alignItems="stretch" height={"100%"}>
            <Sidebar>
              <InputSection state={teams} setter={setTeams} translation="teams" />
              <InputSection state={people} setter={setPeople} translation="people" />
            </Sidebar>
            <Grid item xs>
              2
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}

export default App;

// Sidebar should have set width above breakpoint (width xs or sm??)
//  below this should be max width