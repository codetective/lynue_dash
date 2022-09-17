import { Flex, Icon, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavItem = (props) => {
  const { path = "#", bg, icon, children, ...rest } = props;
  return (
    <Flex
      as={Link}
      to={path}
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
