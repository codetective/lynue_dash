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
  Badge,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import CustomBox from "../DashBoard/CustomBox";

function TransactionsTable({ transactionData, baseUrl }) {
  return (
    <CustomBox p="0">
      <TableContainer>
        <Table variant="simple" size={["sm", "sm", "sm", "md"]}>
          <TableCaption>List of transactions</TableCaption>
          <Thead bg={useColorModeValue("gray.100", "gray.700")}>
            <Tr>
              <Th w="fit-content" p="0"></Th>
              <Th>Payment Number</Th>
              <Th>Date/Time</Th>
              <Th>Amount</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {transactionData?.map((data, indx) => (
              <Tr key={indx}>
                <Td w="fit-content" pl="3" pr="0">
                  {indx + 1}
                </Td>
                <Td>{data.id}</Td>
                <Td textTransform={"capitalize"}>{data.date}</Td>
                <Td>
                  {Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(data.amount)}
                </Td>
                <Td>
                  <Badge
                    py="1"
                    px="3"
                    rounded={"full"}
                    textTransform={"capitalize"}
                    colorScheme={
                      data.status === "pending"
                        ? "yellow"
                        : data.status === "declined"
                        ? "red"
                        : "green"
                    }
                  >
                    {data.status}
                  </Badge>
                </Td>
                <Td>
                  <Button
                    colorScheme="teal"
                    size="sm"
                    variant={"flushed"}
                    as={Link}
                    to={`${baseUrl}/transactions/${data.id}`}
                    color="blue.500"
                  >
                    Details
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

export default TransactionsTable;
