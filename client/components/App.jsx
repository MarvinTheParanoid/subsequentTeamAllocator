// Imports
import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider, Grid, Box, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { getTheme } from "../theme";
import { useLocalStorage } from "../useLocalStorage";

//Component imports
import Header from "./Header";
import Sidebar from "./Sidebar";
import Main from "./Main";
import Input from "./Input";

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
        <Grid container
          direction="column"
          justifyContent="flex-start"
          alignItems="stretch"
          height={"100%"}
          >
          <Header mode={isDarkMode} changeMode={changeMode}/>
          <Grid item xs container direction="row"
            alignItems="stretch"
            height={"100%"}>
            <Grid item xs={12} md={4}>
              <Sidebar>
                <Input />
                <Input />
              </Sidebar>
            </Grid>
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
