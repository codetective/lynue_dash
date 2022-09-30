import {
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FcApproval, FcDeleteDatabase } from "react-icons/fc";
import { Link, useParams } from "react-router-dom";
import ReAssignTicket from "./ReAssignTicket";
import CustomBox from "../DashBoard/CustomBox";
import { sampleTicketsData } from "../../utils/fakedata";

function SingleComplaintView({ baseUrl }) {
  const { ticketID } = useParams();
  //eslint-disable-next-line
  const [ticketData, setTicketData] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(() => {
    const ticket = sampleTicketsData.filter((ticket) => ticket.id === ticketID);
    setTimeout(() => {
      setTicketData(ticket[0]);
      setLoading(false);
    }, 2000);
  }, [ticketID]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Stack spacing="5">
      <CustomBox>
        <HStack justify="space-between">
          <Text>Complaints</Text>
          <Button
            as={Link}
            to={baseUrl + "/complaints"}
            size="xs"
            colorScheme="blue"
            px="20px"
          >
            Back
          </Button>
        </HStack>
      </CustomBox>

      <SimpleGrid columns={[1, 1, 2]} spacing="5">
        <Box>
          <CustomBox>
            <HStack justify={"space-between"}>
              <Box>
                <Text fontWeight="bolder">Ticket No. : {ticketID}</Text>
                <Text as="small" fontSize="xs">
                  Customer ID: 67654
                </Text>
              </Box>
              <IconButton
                variant="ghost"
                rounded="full"
                icon={<BsThreeDotsVertical />}
              />
            </HStack>
          </CustomBox>
          <Divider />
          <CustomBox bg={useColorModeValue("gray.100", "gray.600")} h="50vh">
            chat box here
          </CustomBox>
        </Box>
        <CustomBox p="0">
          {loading && (
            <Center h="100%">
              <Spinner />
            </Center>
          )}
          {!loading && !ticketData && (
            <Center h="100%" flexDir="column">
              <Icon fontSize={"80px"} as={FcDeleteDatabase} />
              <Text py="3" as="b" fontSize="xl">
                Ticket Not Found
              </Text>
            </Center>
          )}
          {!loading && ticketData && (
            <>
              <Stack spacing="5" p="5">
                <SimpleGrid columns={[1, 2, 1, 2]} justify={"space-between"}>
                  <Box>
                    <Text whiteSpace={"nowrap"} fontWeight="bolder">
                      Ticket No. : {ticketID}
                    </Text>
                    <Text as="small" fontSize="xs">
                      Customer ID: 67654
                    </Text>
                    <Text display="block" as="small" fontSize="xs">
                      Date: 25/05/2011 4:19PM
                    </Text>
                  </Box>
                  <HStack
                    py="2"
                    justify={[
                      "flex-start",
                      "flex-end",
                      "flex-start",
                      "flex-end",
                    ]}
                  >
                    <Box as="span" fontSize="xs">
                      priority :
                    </Box>
                    {ticketData && (
                      <Badge
                        ml="1"
                        colorScheme={
                          ticketData?.priority === "high"
                            ? "red"
                            : ticketData?.priority === "medium"
                            ? "yellow"
                            : "green"
                        }
                      >
                        <Box as="span"> {ticketData.priority}</Box>
                      </Badge>
                    )}
                  </HStack>
                </SimpleGrid>

                <Box>
                  <SimpleGrid columns={[1, 2, 1, 2]} justify={"space-between"}>
                    <Box mb="5">
                      <Text as="small" fontSize="10px">
                        Influencer
                      </Text>
                      <HStack>
                        <Avatar name="jude chris" />
                        <Box>
                          <Text as="small" fontWeight="bold" fontSize="xs">
                            Jude Christopher
                          </Text>
                          <Text display="block" as="small" fontSize="11px">
                            WAJS&87
                          </Text>
                        </Box>
                      </HStack>
                    </Box>
                    <HStack
                      align={"flex-start"}
                      justify={[
                        "flex-start",
                        "flex-end",
                        "flex-start",
                        "flex-end",
                      ]}
                    >
                      <Box>
                        <Text
                          textAlign={["left", "right", "left", "right"]}
                          as="span"
                          display={"block"}
                          fontSize="10px"
                        >
                          status
                        </Text>
                        <Badge
                          mt={[2, 3, 2, 3]}
                          color="white"
                          bg={
                            ticketData?.status === "pending"
                              ? "yellow.500"
                              : "green.500"
                          }
                          py="1"
                          px="4"
                          rounded="full"
                        >
                          {ticketData?.status}
                        </Badge>
                      </Box>
                    </HStack>
                  </SimpleGrid>
                  <Box py="6">
                    {ticketData?.status === "pending" && (
                      <Button w="full" colorScheme="blue">
                        Resolve
                      </Button>
                    )}
                  </Box>
                </Box>
              </Stack>
              <Divider />
              {ticketData?.status === "pending" && <ReAssignTicket />}
              {ticketData?.status === "resolved" && (
                <Center flexDir={"column"} p="10">
                  <Icon fontSize={"80px"} as={FcApproval} />
                  <Text py="3" as="b" fontSize="xl">
                    Compliants Resolved!
                  </Text>
                </Center>
              )}
            </>
          )}
        </CustomBox>
      </SimpleGrid>
    </Stack>
  );
}

export default SingleComplaintView;
