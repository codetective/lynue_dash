import React, { useCallback, useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
  Image,
  Text,
  Flex,
  SimpleGrid,
  useColorModeValue,
  Center,
  Spinner,
  Badge,
  Stack,
  Avatar,
  Heading,
  HStack,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import HandleErr from "../../utils/axiosErrHandler";
import cogoToast from "cogo-toast";
import { API_HOSTNAME } from "../../utils/config";
import axios from "axios";
import AlertComponent from "../AlertComponent";
import CustomBox from "../DashBoard/CustomBox";
import { FaBath, FaBed } from "react-icons/fa";
import { TbDimensions } from "react-icons/tb";
import { FcCheckmark } from "react-icons/fc";
import SectionHeading from "../DashBoard/SectionHeading";

function SinglePropertModal({ activeItem, isOpen, onClose, type }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const url =
    type === "sale"
      ? `/admin/sell/property/${activeItem._id}`
      : `/admin/rent/property/${activeItem._id}`;

  const bg = useColorModeValue("gray.100", "gray.700");
  const fetchSingleItem = useCallback(async () => {
    setLoading(true);
    setListing([]);
    setError(false);
    try {
      let result = await axios.get(API_HOSTNAME + url);
      console.log(result);
      setListing(result.data);
      setLoading(false);
    } catch (error) {
      let msg = HandleErr(error);
      cogoToast.error(typeof msg === "string" ? msg : msg.error.message);
      setError(typeof msg === "string" ? msg : msg.error.message);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchSingleItem();
  }, [fetchSingleItem]);

  return (
    <>
      <Modal
        closeOnEsc={false}
        closeOnOverlayClick={false}
        size="full"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            Viewing item : #{activeItem.regNumber}{" "}
            {loading && (
              <Center flexDir="column">
                <Spinner size="sm" />
                <small>loading more data</small>
              </Center>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {activeItem.display_image && activeItem.display_image.length !== 0 && (
              <Flex
                gap="5"
                flexDir={["column-reverse", "column-reverse", "row"]}
              >
                <Stack spacing="5" w={["full", "full", "60%"]}>
                  <Box>
                    <Box h="300px" bg={bg}>
                      <Image
                        h="full"
                        w="full"
                        objectFit={"cover"}
                        src={activeItem.display_image[activeImageIndex].url}
                      />
                    </Box>
                    <SimpleGrid
                      spacing="1"
                      columns={activeItem.display_image.length}
                      py="2"
                    >
                      {activeItem.display_image.map((img, i) => (
                        <Box
                          height={["60px", "100px"]}
                          _hover={{
                            border: "2px solid green",
                          }}
                          key={i}
                        >
                          <Image
                            onClick={() => setActiveImageIndex(i)}
                            objectFit={"cover"}
                            h="full"
                            w="full"
                            src={img.url}
                          />
                        </Box>
                      ))}
                    </SimpleGrid>
                    <HStack
                      justifyContent={"space-between"}
                      spacing="3"
                      flexWrap="wrap"
                    >
                      <Box>
                        <Badge px="2" mr="4">
                          {listing?.propertyType}
                        </Badge>
                        <Text py="2" fontSize="xl">
                          {listing?.houseAddress}
                        </Text>
                      </Box>
                      <Text
                        style={{ marginBlock: "0", marginInline: "0" }}
                        fontWeight="bold"
                      >
                        ₦{Intl.NumberFormat("en-US").format(listing?.price)}
                      </Text>
                    </HStack>
                    <HStack
                      flexWrap={"wrap"}
                      style={{ marginBlock: "0", marginInline: "0" }}
                    >
                      <HStack spacing="1" pr="4">
                        <Icon fontSize="18px" my="2" as={FaBed} />
                        <Text textTransform={"capitalize"} fontSize="sm">
                          {listing?.bedroom}
                        </Text>
                      </HStack>
                      <HStack
                        spacing="1"
                        pr="4"
                        style={{ marginBlock: "0", marginInline: "0" }}
                      >
                        <Icon fontSize="18px" my="2" as={FaBath} />
                        <Text textTransform={"capitalize"} fontSize="sm">
                          {listing?.bathroom}
                        </Text>
                      </HStack>
                      <HStack
                        spacing="1"
                        pr="4"
                        style={{ marginBlock: "0", marginInline: "0" }}
                      >
                        <Icon fontSize="18px" my="2" as={TbDimensions} />
                        <Text textTransform={"capitalize"} fontSize="sm">
                          {listing?.interior_size}
                        </Text>
                      </HStack>
                    </HStack>
                  </Box>
                  {/* desc box */}
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
                        <Text>
                          * Condition :{" "}
                          <UnorderedList pl="10">
                            {listing.condition?.map((c, i) => (
                              <ListItem p="1" key={i}>
                                {c}
                              </ListItem>
                            ))}
                          </UnorderedList>
                        </Text>
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
                    {/* <SimpleGrid columns={[1, 2, 3]} spacing="5">
                      {listing?.amenities?.length > 0 &&
                        listing.amenities.map((a, i) => (
                          <HStack key={i}>
                            <Icon as={FcCheckmark} />
                            <Text>{a}</Text>
                          </HStack>
                        ))}
                    </SimpleGrid> */}
                  </Box>
                </Stack>
                {/* user deatils box */}
                <Box w={["full", "full", "40%"]}>
                  {!loading && error && (
                    <AlertComponent
                      status={"error"}
                      message={error}
                      action={
                        <Button colorScheme="teal" onClick={fetchSingleItem}>
                          Retry
                        </Button>
                      }
                    />
                  )}
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
                </Box>
              </Flex>
            )}

            <Box>
              {!activeItem.display_image &&
                activeItem.display_image.length === 0 && (
                  <Text fontSize={"2xl"}>No images posted</Text>
                )}
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            {activeItem.verified ? (
              <Button disabled>Verified</Button>
            ) : (
              <Button colorScheme={"green"}>Verify Listing</Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SinglePropertModal;
