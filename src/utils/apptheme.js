// 1. Import `extendTheme`
import { extendTheme, theme as base } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const appTheme = extendTheme({
  colors: {
    brand: {
      100: "#0f084b",
      200: "#E7BB41",
      300: "#44BBA4",
    },
  },
  fonts: {
    body: `'Nunito Sans', ${base.fonts?.heading}`,
    heading: `'Roboto', ${base.fonts?.body}`,
  },
  config,
});

export default appTheme;
