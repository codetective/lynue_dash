import {
  Box,
  Center,
  HStack,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import CustomBox from "../DashBoard/CustomBox";

function ComplaintsMetrics({ icon, title, stat, colors }) {
  return (
    <CustomBox bg={useColorModeValue("gray.100", "gray.700")}>
      <HStack alignItems={"top"}>
        <Center bg={colors[1]} p="5" shadow={"base"} rounded="md">
          <Icon
            fontSize={"28px"}
            rounded="md"
            color="white"
            as={icon}
            bg={colors[0]}
            p="1"
          />
        </Center>
        <Box w="full">
          <Text
            textAlign={"center"}
            fontWeight={"bold"}
            fontSize={["sm", "sm", "lg"]}
            textTransform={"uppercase"}
          >
            {title}
          </Text>
          <Text
            fontSize={["sm", "sm", "xl"]}
            color="blue.500"
            textAlign={"center"}
            textTransform={"uppercase"}
            py="2"
          >
            {stat}
          </Text>
        </Box>
      </HStack>
    </CustomBox>
  );
}

export default ComplaintsMetrics;
