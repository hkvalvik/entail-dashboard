"use client";

import "@fontsource-variable/roboto";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";
import { theme } from "./theme";

interface Props {
  children: ReactNode;
}

export const ThemeRegistry = ({ children }: Props) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
