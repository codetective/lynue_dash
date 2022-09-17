import { Badge, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

function GreetingCard(props) {
  const { user } = useSelector((s) => s.auth);
  let color = useColorModeValue("black", "gray.400");
  return (
    <HStack
      gridColumn={"1/2"}
      as={HStack}
      p="5"
      bg={useColorModeValue("white", "gray.900")}
      rounded="md"
      shadow="base"
      fontSize="xl"
      {...props}
      flex="1"
    >
      <Text color="blue.500">Hi, </Text>
      <Text color={color}>{user?.name}</Text>
      <Badge colorScheme="blue" p="1">
        {user?.role}
      </Badge>
    </HStack>
  );
}

export default GreetingCard;
