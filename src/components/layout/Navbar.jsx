import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../Logo";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (
    <Box>
      <HStack justifyContent={"space-between"}>
        <Logo />
        <MobileMenu />
      </HStack>
    </Box>
  );
}

export default Navbar;
