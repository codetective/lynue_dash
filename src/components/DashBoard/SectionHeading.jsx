import { Flex, Text } from "@chakra-ui/react";
import React from "react";

function SectionHeading({
  children,
  fontSize = "16px",
  lineHeight = "16px",
  ...rest
}) {
  return (
    <Flex align={"center"}>
      <Text as="h3" {...rest} fontSize={fontSize}>
        {children}
      </Text>
    </Flex>
  );
}

export default SectionHeading;
