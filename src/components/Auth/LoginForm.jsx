import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/features/AuthSlice";
// import { login } from "../../redux/features/AuthSlice";
// import { signin } from "../../redux/functions/authFuctions";
import { Logo } from "../Logo";
import { PasswordField } from "./PasswordField";

const LoginForm = () => {
  const { loading } = useSelector((state) => state.auth);
  console.log(loading);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    //form submission handling
    e.preventDefault();
    const { email, password } = e.target;
    let data = {
      email: email.value,
      password: password.value,
      name: "John Doe",
      role: "superAdmin",
    };

    dispatch(login(data));
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Flex h="100px" px="4" py="4" justify="center">
            <Logo />
          </Flex>
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={useBreakpointValue({ base: "xs", md: "sm" })}>
              Welcome admin, enter your details to log in.
            </Heading>
          </Stack>
        </Stack>
        <Box
          py={{ base: "5", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={useColorModeValue("white", "gray.900")}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "sm", sm: "xl" }}
          as="form"
          onSubmit={handleSubmit}
          w={["90%", "initial"]}
          alignSelf={["center", "initial"]}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" name="email" type="email" required />
              </FormControl>
              <PasswordField name="password" />
            </Stack>
            <HStack justify="space-between">
              <Button variant="link" colorScheme="blue" size="sm">
                Forgot password?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button isLoading={loading} type="submit" colorScheme="blue">
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginForm;
