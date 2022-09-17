import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import GreetingCard from "./GreetingCard";
import WebsiteMetrics from "./WebsiteMetrics";

function Overview() {
  return (
    <Box>
      <Flex flexDir={["column", "column", "column", "row"]}>
        <GreetingCard mb={[5, 5, 5, 0]} />
        <WebsiteMetrics ml={[0, 0, 0, 5]} />
      </Flex>
    </Box>
  );
}

export default Overview;
