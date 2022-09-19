import {
  Circle,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

function AnalyticsCard({ icon, title, stat, bg = "gray.500" }) {
  return (
    <Stack
      rounded="md"
      p="5"
      shadow={"sm"}
      bg={bg}
      pos="relative"
      // _before={{
      //   content: "''",
      //   pos: "absolute",
      //   left: 0,
      //   top: 0,
      //   width: "100%",
      //   height: "100%",
      //   bg: "red",
      // }}
    >
      <HStack spacing="2">
        <Circle p="2" bg={useColorModeValue("white", "gray.900")}>
          <Icon as={icon} />
        </Circle>
        <Text color="gray.100">{title}</Text>
      </HStack>
      <Text color="gray.200" fontSize={"2xl"} fontWeight="semibold">
        {stat}
      </Text>
    </Stack>
  );
}

export default AnalyticsCard;
