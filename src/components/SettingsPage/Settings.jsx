import {
  Box,
  Divider,
  HStack,
  Icon,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillSecurityScan } from "react-icons/ai";
import { MdLiveHelp } from "react-icons/md";
import { RiNotification2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CustomBox from "../DashBoard/CustomBox";
import SectionHeading from "../DashBoard/SectionHeading";

function Settings() {
  return (
    <Box>
      <CustomBox p="0">
        <Box p="5">
          <SectionHeading fontWeight="semibold" fontSize="xl">
            Settings
          </SectionHeading>
        </Box>
        <Divider />
        <Stack spacing={"8"} p="5">
          <HStack spacing="5" align="flex-start">
            <Icon fontSize="30px" as={RiNotification2Fill} />
            <Box>
              <Text as="h2" fontWeight="bold" fontSize="lg">
                Push Notification
              </Text>
              <Text as="small">Get notified of every new update</Text>
            </Box>
            <Switch size="lg" />
          </HStack>
          <HStack spacing="5" align="flex-start">
            <Icon fontSize="30px" as={AiFillSecurityScan} />
            <Box>
              <Link to="#">
                <Text as="h2" fontWeight="bold" fontSize="lg">
                  Security Settings
                </Text>
              </Link>
            </Box>
          </HStack>
          <HStack spacing="5" align="flex-start">
            <Icon fontSize="30px" as={MdLiveHelp} />
            <Box>
              <Link to="#">
                <Text as="h2" fontWeight="bold" fontSize="lg">
                  Need Help?
                </Text>
              </Link>
            </Box>
          </HStack>
        </Stack>
      </CustomBox>
    </Box>
  );
}

export default Settings;
