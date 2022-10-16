import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import HandleErr from "../../utils/axiosErrHandler";
import { API_HOSTNAME } from "../../utils/config";
import AlertComponent from "../AlertComponent";
import { Logo } from "../Logo";

const ForgotPassword = () => {
  const [loading, setLoading] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  let url = "/admin/forgot_password ";

  const handleSubmit = async (e) => {
    //form submission handling
    e.preventDefault();
    setLoading(true);
    const { email } = e.target;
    let data = {
      email: email.value,
    };
    try {
      await axios.post(API_HOSTNAME + url, data);
      setSent(true);
      setLoading(false);
    } catch (error) {
      let msg = HandleErr(error);
      alert(typeof msg === "string" ? msg : msg.error.message);
      setLoading(false);
    }
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
              Forgot Password ?
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
          {!sent && (
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Enter email to reset</FormLabel>
                  <Input id="email" name="email" type="email" required />
                </FormControl>
              </Stack>

              <Stack spacing="6">
                <Button isLoading={loading} type="submit" colorScheme="blue">
                  ResetPassword
                </Button>
              </Stack>
            </Stack>
          )}

          {sent && (
            <AlertComponent
              message={
                "We sent you an email, check your mail for further instructions"
              }
              status="success"
            />
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default ForgotPassword;
