import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { COUNTRIES } from "../../utils/countries";
import CustomBox from "../DashBoard/CustomBox";
import PhoneNumberInput from "../DashBoard/PhoneNumberInput";
import SectionHeading from "../DashBoard/SectionHeading";

export const countryOptions = COUNTRIES.map(({ name, iso }) => ({
  label: name,
  value: iso,
}));
function ProfileDetailsSection() {
  const [phone_number, setPhoneNumber] = useState("");
  return (
    <CustomBox flex="2" mr={[0, 0, 5]}>
      <SectionHeading fontWeight="semibold" fontSize="md">
        Profile Details
      </SectionHeading>
      <Stack as="form" pt="10" spacing="6">
        <FormControl>
          <FormLabel>First name</FormLabel>
          <Input type="text" name="first_name" placeholder="first name" />
        </FormControl>
        {/* last */}
        <FormControl>
          <FormLabel>Last name</FormLabel>
          <Input type="text" name="last_name" placeholder="last name" />
        </FormControl>
        <FormControl required>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            name="email"
            placeholder="enter valid email address"
          />
        </FormControl>
        <FormControl mb="32px">
          <FormLabel>Phone Number</FormLabel>
          <PhoneNumberInput
            value={phone_number}
            options={countryOptions}
            placeholder="Enter phone number"
            onChange={(value) => setPhoneNumber(value)}
            country={"NGA"}
          />
          <FormHelperText>{phone_number}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>What's your gender?</FormLabel>

          <Select name="gender">
            <option value={null}>Select gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel>Nationality</FormLabel>
          <Input
            type="text"
            name="nationality"
            placeholder="enter nationality"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Address Line 1</FormLabel>
          <Input type="text" name="address_1" placeholder="enter address" />
        </FormControl>
        <FormControl>
          <FormLabel>Address Line 2 (Optional)</FormLabel>
          <Input
            type="text"
            name="address_2"
            placeholder="enter address 2 - optional"
          />
        </FormControl>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input type="text" name="city" placeholder="enter city" />
        </FormControl>
        <FormControl>
          <FormLabel>Zip/Post code</FormLabel>
          <Input type="number" name="zip_code" placeholder="enter zip code" />
        </FormControl>
      </Stack>
    </CustomBox>
  );
}

export default ProfileDetailsSection;
