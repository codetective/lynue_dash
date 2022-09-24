import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CustomBox from "../DashBoard/CustomBox";

function ComplaintsTable({ complaintsData, baseUrl }) {
  return (
    <CustomBox p="0">
      <TableContainer>
        <Table variant="simple" size={["sm", "sm", "sm", "md"]}>
          <TableCaption>List of complaints received from users</TableCaption>
          <Thead bg={useColorModeValue("gray.100", "gray.700")}>
            <Tr>
              <Th w="fit-content" p="0"></Th>
              <Th>Ticket No.</Th>
              <Th>Priority</Th>
              <Th>Status</Th>
              <Th>Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {complaintsData?.map((data, indx) => (
              <Tr key={indx}>
                <Td w="fit-content" pl="3" pr="0">
                  {indx + 1}
                </Td>
                <Td>{data.id}</Td>
                <Td textTransform={"capitalize"}>{data.priority}</Td>
                <Td
                  textTransform={"capitalize"}
                  fontStyle="oblique"
                  color={data.status === "pending" ? "yellow.600" : "green.500"}
                >
                  {data.status}
                </Td>
                <Td>{data.date}</Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    as={Link}
                    to={`${baseUrl}/complaints/${data.id}`}
                  >
                    Open
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </CustomBox>
  );
}

export default ComplaintsTable;
