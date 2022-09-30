import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Textarea,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import SectionHeading from "../DashBoard/SectionHeading";

function ReAssignTicket() {
  const { colorMode } = useColorMode();
  return (
    <Stack p="5" spacing="5">
      <SectionHeading>Reassign Ticket</SectionHeading>
      <FormControl>
        <FormLabel>To :</FormLabel>
        <Input
          bg={colorMode === "light" && "gray.50"}
          size="lg"
          placeholder="input admin user ID"
        />
      </FormControl>
      <FormControl>
        <Textarea
          bg={colorMode === "light" && "gray.50"}
          size="lg"
          rows="10"
          placeholder="drop a comment"
        />
      </FormControl>
      <HStack justify="flex-end">
        <Button size="lg" colorScheme={"blue"}>
          Send
        </Button>
      </HStack>
    </Stack>
  );
}

export default ReAssignTicket;
