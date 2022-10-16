import {
  Avatar,
  Badge,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import CustomBox from "../DashBoard/CustomBox";

function UserDetails({ listing }) {
  return (
    <Stack spacing="5">
      <Badge
        fontSize={"2xl"}
        px="4"
        py="3"
        variant="outline"
        rounded="lg"
        color="black"
        m="auto"
      >
        <Flex flexWrap={"wrap"}>
          ₦{Intl.NumberFormat("en-US").format(listing?.price)}
          <Text as="small" fontSize="sm">
            ({listing?.duration})
          </Text>
        </Flex>
      </Badge>
      {listing.verified ? (
        <Center>
          <Badge variant="outline" p="1" colorScheme={"green"}>
            verified
          </Badge>
        </Center>
      ) : (
        <Center>
          <Badge variant="outline" p="1" colorScheme={"yellow"}>
            unverified
          </Badge>
        </Center>
      )}

      <CustomBox>
        <Center flexDir="column">
          <Avatar
            size="xl"
            // name={
            //   listing.user && listing.user.firstname
            //     ? listing.user.firstname +
            //       " " +
            //       listing.user.lastname
            //     : "John Doe"
            // }
            name="John doe"
          />
          <Heading fontSize="2xl" as="h2" pt="1">
            John Doe
          </Heading>

          <Text as="small">email@email.com</Text>
        </Center>
      </CustomBox>
    </Stack>
  );
}

export default UserDetails;
