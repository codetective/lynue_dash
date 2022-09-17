import { Box, Flex, useColorModeValue } from "@chakra-ui/react";
import { Logo } from "../Logo";
import NavItem from "./NavItem";
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/AuthSlice";

const SidebarContent = ({ menuItems, withoutLogo, pos, baseUrl, ...rest }) => {
  const dispatch = useDispatch();
  const bg = useColorModeValue("white", "gray.900");
  return (
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
      bg={bg}
      borderColor="blackAlpha.300"
      borderRightWidth="1px"
      w="60"
      {...rest}
    >
      {!withoutLogo && (
        <Flex h="100px" px="4" py="4" justify="center" bg={bg}>
          <Logo baseUrl={baseUrl} />
        </Flex>
      )}
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color={useColorModeValue("gray.900", "gray.200")}
        aria-label="Main Navigation"
        pt="4"
      >
        {menuItems?.map((link, index) => (
          <NavItem path={link.path} icon={link.icon} key={index}>
            {link.name}
          </NavItem>
        ))}
        <NavItem
          onClick={() => dispatch(logout())}
          bg="red.200"
          icon={FiLogOut}
        >
          Logout
        </NavItem>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
