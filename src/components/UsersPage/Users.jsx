import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Select,
  Spinner,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import SectionHeading from "../DashBoard/SectionHeading";
import CustomBox from "../DashBoard/CustomBox";
import UsersTable from "./UsersTable";
import axios from "axios";
import { API_HOSTNAME } from "../../utils/config";
import HandleErr from "../../utils/axiosErrHandler";
import cogoToast from "cogo-toast";
import AlertComponent from "../AlertComponent";
import AddUsersModal from "./AddUsersModal";

function Users({ baseUrl, adminOnly }) {
  const [type, setType] = useState("all");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url = adminOnly ? "/admin" : "/users";

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(false);
    setUsers([]);
    try {
      let result = await axios.get(API_HOSTNAME + url);
      setUsers(result.data);
      setLoading(false);
    } catch (error) {
      let msg = HandleErr(error);
      cogoToast.error(typeof msg === "string" ? msg : msg.error.message);
      setError(typeof msg === "string" ? msg : msg.error.message);
      setLoading(false);
    }
  }, [url]);

  const deleteUser = async (id, cancelLoad, closeModal) => {
    try {
      let result = await axios.delete(API_HOSTNAME + url + "/" + id);
      cancelLoad(false);
      setUsers((prev) =>
        prev.filter((user) => {
          return user._id !== result.data.id;
        })
      );
      closeModal();
    } catch (error) {
      let msg = HandleErr(error);
      cogoToast.error(typeof msg === "string" ? msg : msg.error.message);
      cancelLoad(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <Box>
      <CustomBox>
        <HStack justify="space-between">
          <SectionHeading fontWeight="semibold" fontSize={["md", "lg", "xl"]}>
            {" "}
            {adminOnly && type === "all" ? (
              "ADMINISTRATIVE USERS"
            ) : (
              <Box as="span" textTransform={"uppercase"}>
                {type} USERS
              </Box>
            )}
          </SectionHeading>
          <AddUsersModal reloadUsers={fetchUsers} />
        </HStack>
      </CustomBox>
      <Divider />

      {adminOnly && (
        <CustomBox>
          <HStack justify={"flex-end"}>
            <Box>Filter : </Box>
            <Box>
              <Select size="sm" onChange={(e) => setType(e.target.value)}>
                <option value="all">All</option>
                <option value="admin">Admins</option>
                <option value="blogger">Bloggers</option>
                <option value="support">Support</option>
                <option value="analyst">Analysts</option>
              </Select>
            </Box>
          </HStack>
        </CustomBox>
      )}
      {users.length > 0 && (
        <UsersTable
          usersData={users}
          baseUrl={baseUrl}
          deleteUser={deleteUser}
        />
      )}

      {!loading && error && (
        <AlertComponent
          status={"error"}
          message={error}
          action={
            <Button colorScheme="teal" onClick={fetchUsers}>
              Retry
            </Button>
          }
        />
      )}
      {loading && (
        <Center minH="40vh" bg="gray.50">
          <Spinner size="xl" />
        </Center>
      )}
    </Box>
  );
}

export default Users;
