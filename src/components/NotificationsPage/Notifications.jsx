import {
  Box,
  Center,
  Divider,
  Icon,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CustomBox from "../DashBoard/CustomBox";
import SectionHeading from "../DashBoard/SectionHeading";
import { FaBellSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Notifications() {
  const greyed = useColorModeValue("gray.600", "gray.600");
  const { notifications, loading } = useSelector(
    (state) => state.notifications
  );
  return (
    <CustomBox p="0">
      <Box p="5">
        <SectionHeading fontWeight="semibold" fontSize={["md", "lg", "xl"]}>
          Notifications
        </SectionHeading>
      </Box>
      <Divider />
      {!loading && notifications.length === 0 && (
        <Center flexDir="column" p="5" minH="70vh">
          <Icon as={FaBellSlash} color="blue.500" fontSize="100px" />
          <Text textAlign="center" py="3" as="b" fontSize="xl">
            You have no notifications at this time
          </Text>
        </Center>
      )}
      {loading && (
        <Center flexDir="column" p="5" minH="60vh">
          <Spinner size="xl" />
        </Center>
      )}

      {!loading && notifications.length !== 0 && (
        <Stack spacing="5">
          {notifications.map((n, i) => {
            return (
              <Stack p="5">
                <Link to="#">
                  <Text
                    _hover={{
                      color: "blue.500",
                    }}
                    fontWeight="bold"
                    as="h2"
                    fontSize={["xl", "2xl"]}
                  >
                    {n.title}
                  </Text>
                </Link>
                <Text color={greyed} as="small" fontSize={"sm"}>
                  {n.message}
                </Text>
                <Text color={greyed} as="small" fontSize={"xs"}>
                  {n.date}
                </Text>
              </Stack>
            );
          })}
        </Stack>
      )}
    </CustomBox>
  );
}

export default Notifications;
