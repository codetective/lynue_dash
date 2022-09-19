import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function CustomBox({ children, ...rest }) {
  return (
    <Box
      {...rest}
      p="5"
      bg={useColorModeValue("white", "gray.900")}
      rounded="md"
      shadow="base"
    >
      {children}
    </Box>
  );
}

export default CustomBox;
