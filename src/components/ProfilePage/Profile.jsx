import { Flex, Stack } from "@chakra-ui/react";
import React from "react";
import CustomBox from "../DashBoard/CustomBox";
import SectionHeading from "../DashBoard/SectionHeading";
import AvatarNameCard from "./AvatarNameCard";
import ProfileDetailsSection from "./ProfileDetailsSection";

function Profile() {
  return (
    <Stack spacing="5">
      <CustomBox>
        <SectionHeading fontWeight="semibold" fontSize="xl">
          Profile Page
        </SectionHeading>
      </CustomBox>
      <Flex flexDir={["column", "column", "row-reverse"]}>
        <AvatarNameCard />
        <ProfileDetailsSection />
      </Flex>
    </Stack>
  );
}

export default Profile;
