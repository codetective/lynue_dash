// 1. Import `extendTheme`
import { extendTheme, theme as base } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const appTheme = extendTheme(
  {
    colors: {
      brand: {
        100: "#1db954;",
        200: "#1ed760",
        300: "#191414",
      },
    },
    fonts: {
      body: `'Nunito Sans', ${base.fonts?.heading}`,
      heading: `'Roboto', ${base.fonts?.body}`,
    },
    config,
  }
);

export default appTheme;
