import {
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { PAGETITLE } from "../../utils/config";
import { Logo } from "../Logo";
import MobileMenu from "./MobileMenu";
import SidebarContent from "./Sidebar";

function DashBoardLayout({ navLinks, baseUrl, children }) {
  const [isLessThanLargeScreen] = useMediaQuery("(max-width: 767px)");
  const { colorMode, toggleColorMode } = useColorMode();
  const { pathname } = useLocation();

  let SIDEBAR_DISP = {
    base: "none",
    md: "unset",
  };

  let CONTENT_BOX_ML = {
    base: 0,
    md: 60,
  };
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.800")}
      minH="100vh"
    >
      <SidebarContent
        baseUrl={baseUrl}
        menuItems={navLinks}
        display={SIDEBAR_DISP}
      />
      <Box ml={CONTENT_BOX_ML} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.900")}
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          {!isLessThanLargeScreen && (
            <Text fontSize="xl" fontWeight={"semibold"}>
              {PAGETITLE(baseUrl, pathname)}
            </Text>
          )}
          {isLessThanLargeScreen && <Logo baseUrl={baseUrl} />}
          <HStack spacing="3" align="center">
            <IconButton
              display={["none", "flex", "flex"]}
              fontSize="20px"
              bg={useColorModeValue("brand.100", "gray.800")}
              color={useColorModeValue("white", "gray.100")}
              aria-label="notification icon"
              icon={<FaBell />}
              colorScheme="blue"
            />
            <IconButton
              display={["none", "flex", "flex"]}
              fontSize="20px"
              bg={useColorModeValue("brand.100", "gray.800")}
              color={useColorModeValue("white", "gray.100")}
              aria-label="colormode icon"
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              colorScheme="blue"
            />
            <Avatar
              ml="4"
              size="sm"
              name="anubra266"
              src="https://avatars.githubusercontent.com/u/30869823?v=4"
              cursor="pointer"
            />
            {isLessThanLargeScreen && (
              <MobileMenu baseUrl={baseUrl} menuItems={navLinks} />
            )}
          </HStack>
        </Flex>

        <Box as="main" p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default DashBoardLayout;
