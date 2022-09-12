import { Avatar, Box, Flex, Icon, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { FaBell } from "react-icons/fa";
import { Logo } from "../Logo";
import MobileMenu from "./MobileMenu";
import SidebarContent from "./Sidebar";

function DashBoardLayout({ navLinks, baseUrl, children }) {
  const [isLessThanLargeScreen] = useMediaQuery("(max-width: 767px)");

  let SIDEBAR_DISP = {
    base: "none",
    md: "unset",
  };

  let CONTENT_BOX_ML = {
    base: 0,
    md: 60,
  };
  return (
    <Box as="section" bg="gray.50" minH="100vh">
      <SidebarContent
        baseUrl={baseUrl}
        menuItems={navLinks}
        display={SIDEBAR_DISP}
      />
      <Box ml={CONTENT_BOX_ML} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify={["space-between", "space-between", "flex-end"]}
          w="full"
          px="4"
          bg="white"
          borderBottomWidth="1px"
          borderColor="blackAlpha.300"
          h="14"
        >
          {isLessThanLargeScreen && <Logo baseUrl={baseUrl} />}
          <Flex align="center">
            <Icon color="gray.500" as={FaBell} cursor="pointer" />
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
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {children}
        </Box>
      </Box>
    </Box>
  );
}

export default DashBoardLayout;
