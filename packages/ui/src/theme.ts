import "@fontsource-variable/roboto";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#ff6600",
    },
  },
  typography: {
    fontFamily: "Roboto Variable, Arial, sans-serif",
  },
});
