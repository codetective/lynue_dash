import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Spinner,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import * as React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import HandleErr from "../../utils/axiosErrHandler";
import { API_HOSTNAME } from "../../utils/config";
import AlertComponent from "../AlertComponent";
import { Logo } from "../Logo";
import { PasswordField } from "./PasswordField";
import jwt_decode from "jwt-decode";

const ResetPassword = () => {
  const [loading, setLoading] = React.useState(false);
  const [checking, setChecking] = React.useState(true);
  const [sent, setSent] = React.useState(false);
  const [exp, setExp] = React.useState(false);
  let url = "/admin/new_password";

  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    //form submission handling
    e.preventDefault();
    setLoading(true);
    const { password } = e.target;
    let data = {
      password: password.value,
      id,
      token,
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

  const CheckExp = React.useCallback(() => {
    try {
      let TODAY = Date.now();
      const decoded = jwt_decode(token);
      let JWT_DATE = new Date(decoded.exp * 1000);
      if (JWT_DATE < TODAY) {
        setExp(true);
        return setChecking(false);
      }
      setChecking(false);
    } catch (err) {
      setExp(true);
      setChecking(false);
    }
  }, [token]);

  useEffect(() => {
    CheckExp();
  }, [CheckExp]);

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
              Reset your password
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
          {!sent && !exp && !checking && (
            <Stack spacing="6">
              <Stack spacing="5">
                <PasswordField name="password" />
              </Stack>

              <Stack spacing="6">
                <Button isLoading={loading} type="submit" colorScheme="blue">
                  Change Password
                </Button>
              </Stack>
            </Stack>
          )}
          {checking && (
            <Center>
              <Spinner size="xl" />
            </Center>
          )}

          {sent && (
            <AlertComponent
              message={"Your password has been changed, proceed to login"}
              status="info"
              action={
                <Button as="a" href="/">
                  Login
                </Button>
              }
            />
          )}

          {!checking && exp && (
            <AlertComponent
              message={"This link has expired."}
              status="error"
              action={
                <Button as="a" href="/forgot-password">
                  Get new Link
                </Button>
              }
            />
          )}
        </Box>
      </Stack>
    </Container>
  );
};

export default ResetPassword;
