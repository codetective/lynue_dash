import {
  Box,
  HStack,
  SimpleGrid,
  Stack,
  useColorModeValue,
  useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import AnalyticsCard from "../DashBoard/AnalyticsCard";
import RadioButton from "../DashBoard/RadioButton";
import SectionHeading from "../DashBoard/SectionHeading";
import { FaUserFriends, FaBitcoin } from "react-icons/fa";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { VscFeedback } from "react-icons/vsc";
import millify from "millify";

function AnalyticsSection(props) {
  const timeStamps = [
    { name: "Day" },
    { name: "Week" },
    { name: "Month" },
    { name: "All Time" },
  ];

  const data = {
    users: 1000,
    fsbo: 1000,
    total_trans: 27289,
    complaints: 1034,
  };

  const handleChange = (value) => {
    console.log(value);
    //make api call here
  };
  //eslint-disable-next-line
  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: "Day",
    onChange: handleChange,
  });
  return (
    <Box
      {...props}
      px="5"
      pb="5"
      bg={useColorModeValue("white", "gray.800")}
      shadow="base"
    >
      <Box as="header" py="4">
        <SimpleGrid columns={[1, 2]} spacing="5">
          <SectionHeading fontWeight="semibold">
            Analytics Overview
          </SectionHeading>
          <Stack {...getRootProps()}>
            <HStack justify={["flex-start", "flex-end"]}>
              {timeStamps.map((timeStamp) => {
                return (
                  <RadioButton
                    key={timeStamp.name}
                    timeStamp={timeStamp.name}
                    {...getRadioProps({ value: timeStamp.name })}
                  />
                );
              })}
            </HStack>
          </Stack>
        </SimpleGrid>
      </Box>
      <SimpleGrid columns={[1, 2, 2, 4]} spacing="4">
        <AnalyticsCard
          icon={FaUserFriends}
          stat={Intl.NumberFormat("en-US").format(data.users)}
          title={"Users"}
          bg={"blue.500"}
        />
        <AnalyticsCard
          icon={BiMessageRoundedDetail}
          stat={millify(data.fsbo, {
            precision: 3,
            decimalSeparator: ",",
            lowercase: true,
            space: true,
          })}
          title="FSBO"
          bg={"teal.800"}
        />
        <AnalyticsCard
          icon={FaBitcoin}
          stat={millify(data.total_trans, {
            precision: 2,
            lowercase: true,
            decimalSeparator: ",",
            space: true,
          })}
          title="Total Transactions"
          bg={"yellow.600"}
        />
        <AnalyticsCard
          icon={VscFeedback}
          stat={millify(data.complaints, {
            precision: 3,
            decimalSeparator: ",",
            space: true,
            lowercase: true,
          })}
          title={"Complaints"}
          bg={"red.500"}
        />
      </SimpleGrid>
    </Box>
  );
}

export default AnalyticsSection;
