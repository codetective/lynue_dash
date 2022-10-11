import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  HStack,
  Avatar,
  Text,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";
import CustomBox from "../DashBoard/CustomBox";
import EditUserModal from "./EditUserModal";

function UsersTable({ usersData, baseUrl, deleteUser }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedUser, setSelectedUser] = useState(undefined);

  return (
    <CustomBox p="0">
      <TableContainer>
        <Table variant="simple" size={["sm", "sm", "sm", "md"]}>
          <TableCaption>List of users</TableCaption>
          <Thead
            bg={useColorModeValue("gray.100", "gray.700")}
            style={{
              marginBottom: "10px",
            }}
          >
            <Tr>
              <Th w="fit-content" p="0"></Th>
              <Th>Name</Th>
              <Th>ID Number</Th>
              <Th>Role</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {usersData?.map((data, indx) => (
              <Tr key={indx}>
                <Td w="fit-content" pl="3" pr="0">
                  {indx + 1}
                </Td>
                <Td>
                  <HStack spacing="3">
                    <Avatar
                      size="sm"
                      src={data.picture}
                      name={data.firstname + " " + data.lastname}
                    />
                    <Text>{data.firstname + " " + data.lastname}</Text>
                  </HStack>
                </Td>
                <Td>{String(data._id).slice(0, 6) + "..."}</Td>
                <Td textTransform={"capitalize"}>{data.role}</Td>

                <Td>
                  <Button
                    onClick={() => {
                      setSelectedUser(data);
                      onOpen();
                    }}
                    colorScheme="teal"
                    size="sm"
                    variant={"outline"}
                    color="blue.500"
                  >
                    Edit User
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {selectedUser && (
        <EditUserModal
          data={selectedUser}
          isOpen={isOpen}
          onClose={onClose}
          deleteUser={deleteUser}
        />
      )}
    </CustomBox>
  );
}

export default UsersTable;
