import {
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BsClockHistory } from "react-icons/bs";
import { TbClockOff } from "react-icons/tb";
import { FiSmartphone } from "react-icons/fi";
import { MdComputer } from "react-icons/md";

function WebsiteMetrics(props) {
  return (
    <SimpleGrid
      columns={[1, 2, 2, 4]}
      spacing={[1, 3, 4, 1]}
      py="3"
      as={HStack}
      bg={useColorModeValue("white", "gray.900")}
      rounded="md"
      shadow="base"
      fontSize="xl"
      {...props}
      flex="2"
    >
      <MetricCard
        data={"10:20:38 hrs"}
        icon={BsClockHistory}
        title="website uptime"
        borderRight={["none", "1px solid #c8c8d2"]}
      />
      <MetricCard data={"1"} icon={TbClockOff} title="downtimes" />
      <MetricCard
        data={"1,000"}
        icon={FiSmartphone}
        title="mobile users"
        borderRight={["none", "1px solid #c8c8d2"]}
        borderLeft={["none", "none", "none", "1px solid #c8c8d2"]}
      />
      <MetricCard data={"100"} icon={MdComputer} title="web platform users" />
    </SimpleGrid>
  );
}

export default WebsiteMetrics;

function MetricCard({ title, icon, data, ...rest }) {
  let color = useColorModeValue("black", "gray.400");

  return (
    <Stack style={{ margin: 0 }} {...rest} p="4" spacing="1">
      <Icon size="16px" as={icon} />
      <Text
        as="small"
        fontSize="xs"
        style={{ fontVariant: "all-small-caps" }}
        fontWeight="bold"
        color={"blue.500"}
      >
        {title}
      </Text>
      <Text
        fontSize={["sm", "sm", "sm", "xs"]}
        fontWeight={"semibold"}
        color={color}
      >
        {data}
      </Text>
    </Stack>
  );
}
