import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

function SectionHeading({
  children,
  fontSize = "16px",
  lineHeight = "16px",
  ...rest
}) {
  return (
    <Flex align={"center"}>
      <Heading as="h3" {...rest} fontSize={fontSize}>
        {children}
      </Heading>
    </Flex>
  );
}

export default SectionHeading;
