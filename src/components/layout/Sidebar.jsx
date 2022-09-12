import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "../Logo";
import NavItem from "./NavItem";

const SidebarContent = ({ menuItems, withoutLogo, pos, baseUrl, ...rest }) => (
  <Box
    as="nav"
    pos={pos || "fixed"}
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg="white"
    borderColor="blackAlpha.300"
    borderRightWidth="1px"
    w="60"
    {...rest}
  >
    {!withoutLogo && (
      <Flex h="100px" px="4" py="4" justify="center" bg="gray.50">
        <Logo baseUrl={baseUrl} />
      </Flex>
    )}
    <Flex
      direction="column"
      as="nav"
      fontSize="sm"
      color="gray.800"
      aria-label="Main Navigation"
      pt="4"
    >
      {menuItems?.map((link, index) => (
        <NavItem path={link.path} icon={link.icon} key={index}>
          {link.name}
        </NavItem>
      ))}
    </Flex>
  </Box>
);

export default SidebarContent;
