import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import CustomBox from "../components/DashBoard/CustomBox";

function SingleComplaintView({ baseUrl }) {
  const { ticket } = useParams();
  //eslint-disable-next-line
  const [ticketData, setTicketData] = useState({
    priority: "medium",
    status: "resolved",
  });

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
                <Text fontWeight="bolder">Ticket No. : {ticket}</Text>
                <Text as="sm" fontSize="xs">
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
        <CustomBox>
          <Stack spacing="5">
            <SimpleGrid columns={[1, 2, 1, 2]} justify={"space-between"}>
              <Box>
                <Text whiteSpace={"nowrap"} fontWeight="bolder">
                  Ticket No. : {ticket}
                </Text>
                <Text as="sm" fontSize="xs">
                  Customer ID: 67654
                </Text>
                <Text display="block" as="sm" fontSize="xs">
                  Date: 25/05/2011 4:19PM
                </Text>
              </Box>
              <HStack
                py="2"
                justify={["flex-start", "flex-end", "flex-start", "flex-end"]}
              >
                <Box as="span" fontSize="xs">
                  priority :
                </Box>
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
              </HStack>
            </SimpleGrid>

            <Box>
              <SimpleGrid columns={[1, 2, 1, 2]} justify={"space-between"}>
                <Box mb="5">
                  <Text as="sm" fontSize="10px">
                    Influencer
                  </Text>
                  <HStack>
                    <Avatar name="jude chris" />
                    <Box>
                      <Text as="sm" fontWeight="bold" fontSize="xs">
                        Jude Christopher
                      </Text>
                      <Text display="block" as="sm" fontSize="11px">
                        WAJS&87
                      </Text>
                    </Box>
                  </HStack>
                </Box>
                <HStack
                  align={"flex-start"}
                  justify={["flex-start", "flex-end", "flex-start", "flex-end"]}
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
            </Box>
          </Stack>
        </CustomBox>
      </SimpleGrid>
    </Stack>
  );
}

export default SingleComplaintView;
