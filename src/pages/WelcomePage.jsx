import { Box, Button, Center, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../components/Logo";
import { roles } from "../utils/config";

function WelcomePage() {
  return (
    <Center flexDir="column" h="100vh">
      <Center
        flexDir={"column"}
        px="5"
        py="8"
        rounded={"30px"}
        bg="white"
        w="90%"
        maxW="600px"
        shadow="base"
      >
        <Box h="50px">
          <Logo />
        </Box>
        <Stack py="5" textAlign={"center"}>
          <Text as="h1" fontWeight="bold" fontSize={"28px"}>
            Hello there!
          </Text>
          <Text>Select your role below to login:</Text>
          <SimpleGrid spacing="5" columns={[1, 3, 3]} py="5">
            {Object.keys(roles).map((key, indx) => (
              <Button
                rounded="full"
                key={indx}
                p="4"
                shadow="base"
                fontSize={"lg"}
                colorScheme="blue"
                as={Link}
                to={roles[key].path}
              >
                <Text>{roles[key].title}</Text>
              </Button>
            ))}
          </SimpleGrid>
        </Stack>
      </Center>
    </Center>
  );
}

export default WelcomePage;
