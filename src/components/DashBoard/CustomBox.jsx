import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function CustomBox({ children, bg, p = "5", ...rest }) {
  const def_bg = useColorModeValue("white", "gray.900");
  return (
    <Box {...rest} p={p} bg={bg || def_bg} rounded="md" shadow="base">
      {children}
    </Box>
  );
}

export default CustomBox;
