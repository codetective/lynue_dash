import { Button, Center } from "@chakra-ui/react";
import React from "react";
import AlertComponent from "../components/AlertComponent";
import { FaRedo } from "react-icons/fa";

function ErrorPage() {
  return (
    <Center h="100vh" flexDir={"column"}>
      <AlertComponent
        status={"error"}
        message="an error occur during rendering a component, it will likely be resolved by resetting the page"
        action={
          <Button
            colorScheme="teal"
            onClick={() => {
              localStorage.clear();
              sessionStorage.clear();
              window.location = "/";
            }}
            leftIcon={<FaRedo />}
          >
            Reset & Relaod
          </Button>
        }
      />
    </Center>
  );
}

export default ErrorPage;
