import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
// import ResponsiveAppBar from "./components/Navbar/Navbar.component";
import { Landing } from "./components/Pages/Landing/Landing.component";
import { Footer } from "./components/Footer/Footer.component";
import "./App.css";

function App() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h1 = {
    fontSize: "3rem",
    "@media (min-width:0px)": {
      fontSize: "3rem",
    },
    "@media (min-width:600px)": {
      fontSize: "5rem",
    },
    "@media (min-width:900px)": {
      fontSize: "6rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "7.5rem",
    },
    "@media (min-width:1536px)": {
      fontSize: "9.5rem",
    },
  };

  theme.typography.h3 = {
    fontSize: "1.5rem",
    "@media (min-width:0px)": {
      fontSize: "1.75rem",
    },
    "@media (min-width:600px)": {
      fontSize: "2.25rem",
    },
    "@media (min-width:900px)": {
      fontSize: "3.5rem",
    },
    "@media (min-width:1200px)": {
      fontSize: "3rem",
    },
    "@media (min-width:1536px)": {
      fontSize: "5rem",
    },
  };

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        {/* <ResponsiveAppBar /> */}
        <Landing />
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
