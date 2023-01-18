import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Main from "./components/Main";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4d3fb5",
    },
    contrastThreshold: 4.5,
    tonalOffset: 0.2,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;
