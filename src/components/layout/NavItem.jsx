import { Flex, Icon } from "@chakra-ui/react";

const NavItem = (props) => {
  const { icon, children, ...rest } = props;
  return (
    <Flex
      align="center"
      px="4"
      mx="2"
      rounded="md"
      py="3"
      cursor="pointer"
      _hover={{
        bg: "blackAlpha.200",
        color: "black",
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
