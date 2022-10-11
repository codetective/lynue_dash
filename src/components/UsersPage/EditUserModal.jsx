import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  HStack,
  Avatar,
  Box,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useState } from "react";
import SectionHeading from "../DashBoard/SectionHeading";

export default function EditUserModal({ data, isOpen, onClose, deleteUser }) {
  const [loading, setLoading] = useState(false);
  const handleDelete = (id) => {
    if (
      window.confirm("Are you sure you wan to delete " + data.firstname + "?")
    ) {
      setLoading(true);
      deleteUser(id, setLoading, onClose);
    } else {
      return;
    }
  };
  return (
    <>
      <Modal
        size="lg"
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        rounded="lg"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader roundedTop="lg" bg="blue.500" color="white">
            Edit User
          </ModalHeader>
          <ModalCloseButton color="white" />
          <ModalBody py="30px">
            <Stack spacing="5">
              <HStack justify="space-between">
                <HStack spacing="5">
                  <Avatar
                    size="sm"
                    src={data.picture}
                    name={data.firstname + " " + data.lastname}
                  />
                  <Box>
                    <Text fontSize={"lg"}>
                      {data.firstname + " " + data.lastname}
                    </Text>
                    <Text fontSize={"sm"} as="small">
                      {data.email} | {data.phone}
                    </Text>
                    <Text fontSize={"sm"} as="small">
                      {data.id}
                    </Text>
                  </Box>
                </HStack>
                <Text textAlign={"right"} color="blue.500">
                  {data.role}
                </Text>
              </HStack>
              <SectionHeading fontSize="xl"> Choose action: </SectionHeading>

              <SimpleGrid columns={2} spacing="8">
                <Button px="10">Suspend User</Button>
                <Button px="10">Block User</Button>
                <Button px="10">Disable User</Button>
                <Button
                  isLoading={loading}
                  px="10"
                  colorScheme={"red"}
                  onClick={() => handleDelete(data._id)}
                >
                  Delete User
                </Button>
              </SimpleGrid>
              <Box pt="5">
                <SectionHeading fontSize="xl"> Change Role</SectionHeading>
                <HStack py="5" spacing="5">
                  <FormControl>
                    <FormLabel>From</FormLabel>
                    <Input value={data.role} readOnly />
                  </FormControl>
                  <FormControl>
                    <FormLabel>To</FormLabel>
                    <Select>
                      <option value="admin">Admin</option>
                      <option value="blogger">Bloggers</option>
                      <option value="support">Support</option>
                      <option value="analyst">Analysts</option>
                    </Select>
                  </FormControl>
                </HStack>
              </Box>
            </Stack>
          </ModalBody>

          <ModalFooter justifyContent={"space-between"}>
            <Button
              colorScheme="red"
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Close
            </Button>
            <Button colorScheme={"blue"}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
