import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";
import React from "react";

function AlertComponent({ message, status, action = null }) {
  return (
    <Alert
      status={status}
      variant="subtle"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      height="fit-content"
      width={"full"}
      rounded="30px"
      shadow="base"
    >
      <AlertIcon boxSize="40px" mr={0} />
      <AlertTitle mt={4} mb={1} fontSize="lg">
        {status === "error"
          ? "Something went wrong"
          : status === "success"
          ? "Request successful"
          : "Something is not right"}
      </AlertTitle>
      <AlertDescription maxWidth="sm">{message}</AlertDescription>
      <Box p="5">{action}</Box>
    </Alert>
  );
}

export default AlertComponent;
