import { Box, Divider, HStack, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import SectionHeading from "../DashBoard/SectionHeading";
import CustomBox from "../DashBoard/CustomBox";
import UsersTable from "./UsersTable";
import { sampleUsers } from "../../utils/fakedata";

function Users({ baseUrl }) {
  const [type, setType] = useState("all");

  return (
    <Box>
      <CustomBox>
        <SectionHeading fontWeight="semibold" fontSize={["md", "lg", "xl"]}>
          {" "}
          {type === "all" ? (
            "USERS"
          ) : (
            <Box as="span" textTransform={"uppercase"}>
              {type} USERS
            </Box>
          )}
        </SectionHeading>
      </CustomBox>
      <Divider />
      <CustomBox>
        <HStack justify={"flex-end"}>
          <Box>Filter : </Box>
          <Box>
            <Select size="sm" onChange={(e) => setType(e.target.value)}>
              <option value="all">All</option>
              <option value="admin">Admin Users</option>
              <option value="blogger">Bloggers</option>
              <option value="support">Support</option>
              <option value="analyst">Analysts</option>
            </Select>
          </Box>
        </HStack>
      </CustomBox>
      <UsersTable usersData={sampleUsers} baseUrl={baseUrl} />
    </Box>
  );
}

export default Users;
