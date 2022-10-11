import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const {
    path = "#",
    bg,
    closeMobileMenu,
    icon,
    children,
    noStyle,
    ...rest
  } = props;
  let activeStyle = {
    background: "#00000014",
  };
  return (
    <Flex
      style={({ isActive }) => (isActive && !noStyle ? activeStyle : undefined)}
      as={NavLink}
      to={path}
      end
      align="center"
      px="4"
      mx="2"
      rounded="md"
      py="3"
      cursor="pointer"
      _hover={{
        bg: bg || "blackAlpha.200",
        color: useColorModeValue("black", "gray.500"),
      }}
      role="group"
      fontWeight="semibold"
      transition=".15s ease"
      onClick={
        closeMobileMenu
          ? (e) => {
              if (e.target.tagName === "A") {
                closeMobileMenu();
              }
            }
          : null
      }
      {...rest}
    >
      {icon && (
        <Icon
          mr="2"
          boxSize="4"
          _groupHover={{
            color: "blue.500",
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  );
};

export default NavItem;
