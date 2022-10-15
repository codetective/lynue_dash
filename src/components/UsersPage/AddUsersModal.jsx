import {
  Button,
  Center,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaCamera, FaPlusSquare } from "react-icons/fa";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import PhoneNumberInput from "../DashBoard/PhoneNumberInput";
import { countryOptions } from "../ProfilePage/ProfileDetailsSection";
import { API_HOSTNAME, roles } from "../../utils/config";
import axios from "axios";
import HandleErr from "../../utils/axiosErrHandler";
import cogoToast from "cogo-toast";

function AddUsersModal({ reloadUsers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [phone_number, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(null);

  const handleImage = (e) => {
    const { files } = e.target;
    let img = files[0];
    setImage([img, URL.createObjectURL(img)]);
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const { email, firstname, lastname, phone, address, DOB, role, password } =
      e.target;
    let img = image[0];

    const F = new FormData();

    F.append("adminPicture", img);
    F.append("email", email.value);
    F.append("firstname", firstname.value);
    F.append("lastname", lastname.value);
    F.append("phoneNumber", phone.value);
    F.append("address", address.value);
    F.append("DOB", DOB.value);
    F.append("role", role.value);
    F.append("password", password.value);

    try {
      await axios.post(API_HOSTNAME + "/admin/signup", F);
      setLoading(false);
      cogoToast.success("Admin created");
      reloadUsers();
      onClose();
    } catch (error) {
      let msg = HandleErr(error);
      cogoToast.error(typeof msg === "string" ? msg : msg.error.message);
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme={"green"}
        leftIcon={<FaPlusSquare />}
      >
        Add User
      </Button>
      <Drawer
        closeOnEsc={false}
        closeOnOverlayClick={false}
        size="md"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create ADMIN account</DrawerHeader>

          <DrawerBody>
            <Stack as="form" spacing="6" id="addUser" onSubmit={handleSubmit}>
              <FormControl isRequired>
                <FormLabel
                  cursor="pointer"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDir="column"
                  height="200px"
                  w="full"
                  bg={useColorModeValue("gray.100", "gray.900")}
                >
                  {!image && (
                    <>
                      <Center fontSize={"70px"}>
                        <FaCamera />
                      </Center>
                      <Text py="2" fontSize="lg">
                        click to select image
                      </Text>
                    </>
                  )}
                  {image && (
                    <Image src={image[1]} height="full" objectFit={"contain"} />
                  )}
                </FormLabel>
                <Input
                  type="file"
                  accept="images/*"
                  name="adminPicture"
                  onChange={handleImage}
                  opacity="0.1"
                  h="0"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>First name</FormLabel>
                <Input type="text" name="firstname" placeholder="first name" />
              </FormControl>
              {/* last */}
              <FormControl isRequired>
                <FormLabel>Last name</FormLabel>
                <Input type="text" name="lastname" placeholder="last name" />
              </FormControl>
              <FormControl isRequired>
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

              <FormControl isRequired>
                <FormLabel>Date of Birth</FormLabel>

                <Input min="1950-01-01" type="date" name="DOB" />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Address</FormLabel>
                <Input type="text" name="address" placeholder="enter address" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Role</FormLabel>
                <Select name="role">
                  {Object.keys(roles).map((k) => (
                    <option key={k} value={k}>
                      {k}
                    </option>
                  ))}
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>

                <Input
                  type="text"
                  name="password"
                  placeholder="enter a password for user"
                />
              </FormControl>
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              disabled={loading}
              variant="outline"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              isLoading={loading}
              type="submit"
              form="addUser"
              colorScheme="blue"
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddUsersModal;
