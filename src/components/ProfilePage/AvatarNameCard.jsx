import { Avatar, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import CustomBox from "../DashBoard/CustomBox";

function AvatarNameCard() {
  const { user } = useSelector((s) => s.auth);

  return (
    <CustomBox mb={[5, 5, 0]} flex="1">
      <Stack align={"center"} flexDir="column">
        <Avatar
          src="https://randomuser.me/api/portraits/women/44.jpg"
          name={user?.name}
          size="2xl"
        />
        <Heading fontSize="2xl" as="h2" pt="1">
          {user?.name}
        </Heading>
        <Text textTransform={"uppercase"} fontWeight={"light"}>
          ID: {user?.id || "qwertyuiop"}
        </Text>
        <Text as="small">
          <Text fontWeight={"bold"} as="span">
            Role :
          </Text>
          <Text color="blue.500" as="span" textTransform={"lowercase"}>
            {" "}
            {user?.role}
          </Text>
        </Text>
      </Stack>
    </CustomBox>
  );
}

export default AvatarNameCard;
