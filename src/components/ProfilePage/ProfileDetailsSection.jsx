import { FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import React from "react";
import CustomBox from "../DashBoard/CustomBox";
import SectionHeading from "../DashBoard/SectionHeading";

function ProfileDetailsSection() {
  return (
    <CustomBox flex="2" mr={[0, 0, 5]}>
      <SectionHeading fontWeight="semibold" fontSize="sm">
        Profile Details
      </SectionHeading>
      <Stack as="form" pt="10" spacing="5">
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input type="text" name="first_name" placeholder="first name" />
        </FormControl>
        {/* last */}
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input type="text" name="first_name" placeholder="last name" />
        </FormControl>
      </Stack>
    </CustomBox>
  );
}

export default ProfileDetailsSection;
