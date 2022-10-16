import {
  Box,
  HStack,
  Icon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FcCheckmark } from "react-icons/fc";
import SectionHeading from "../DashBoard/SectionHeading";

function PropertyDetails({ listing }) {
  return (
    <>
      <Box>
        <SectionHeading fontWeight="bold" fontSize="xl">
          Description
        </SectionHeading>
        <Text>{listing?.description}</Text>
      </Box>
      {/* amenities */}
      <Box>
        <SectionHeading fontWeight="bold" fontSize="xl">
          Amenities
        </SectionHeading>
        <SimpleGrid columns={[1, 2, 3]} spacing="5">
          {listing?.amenities?.length > 0 &&
            listing.amenities.map((a, i) => (
              <HStack key={i}>
                <Icon as={FcCheckmark} />
                <Text>{a}</Text>
              </HStack>
            ))}
        </SimpleGrid>
      </Box>
      {/* produc details */}
      <Box>
        <SectionHeading fontWeight="bold" fontSize="xl">
          Property Details
        </SectionHeading>
        <Stack spacing="5">
          <Box>
            <Text>* Condition : </Text>
            <UnorderedList pl="10">
              {listing?.condition?.map((c, i) => (
                <ListItem p="1" key={i}>
                  {c}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
          <Box>
            <Text>
              * Furnishing? : <br />
              <Box pl="10" as="span">
                {listing.isFurnished
                  ? "Property is furnished"
                  : "Property is not furnished"}
              </Box>
            </Text>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default PropertyDetails;
