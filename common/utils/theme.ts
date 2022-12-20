// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc

const breakpoints = {
  xs: "280px",
  sm: "429px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

const fonts = {
  body: "Inter, sans-serif",
  heading: "Inter, serif",
  mono: "Inter, monospace",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints,
  fonts,
});

export { theme };
