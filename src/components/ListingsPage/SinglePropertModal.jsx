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
  Text,
  Flex,
  Center,
  Spinner,
  Badge,
  Stack,
  HStack,
  useToast,
} from "@chakra-ui/react";
import HandleErr from "../../utils/axiosErrHandler";
import { API_HOSTNAME } from "../../utils/config";
import axios from "axios";
import AlertComponent from "../AlertComponent";
import ImagesBox from "./ImagesBox";
import BedBathSizeSection from "./BedBathSizeSection";
import PropertyDetails from "./PropertyDetails";
import UserDetails from "./UserDetails";

function SinglePropertModal({ activeItem, isOpen, onClose, type }) {
  const toast = useToast();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [error, setError] = useState(false);
  const verifyUrl =
    type === "sale"
      ? `/changeStatus/sell/${activeItem._id}`
      : `/changeStatus/${activeItem._id}`;
  const url =
    type === "sale"
      ? `/admin/sell/property/${activeItem._id}`
      : `/admin/rent/property/${activeItem._id}`;

  const fetchSingleItem = useCallback(async () => {
    if (!isOpen) return;
    setLoading(true);
    setListing([]);
    setError(false);
    try {
      let result = await axios.get(API_HOSTNAME + url);
      setListing(result.data);
      setLoading(false);
    } catch (error) {
      let msg = HandleErr(error);
      toast({
        status: "error",
        title: "An error occurred",
        description: typeof msg === "string" ? msg : msg.error.message,
        duration: 5,
        isClosable: true,
        position: "bottom-right",
      });
      setError(typeof msg === "string" ? msg : msg.error.message);
      setLoading(false);
    }
  }, [url, isOpen, toast]);

  const verifyListing = async () => {
    setVerifying(true);
    try {
      await axios.get(API_HOSTNAME + verifyUrl);
      toast({
        status: "success",
        title: "Request Successful",
        description: "Property has been verified",
        isClosable: true,
        position: "bottom-right",
      });
      fetchSingleItem();
      setVerifying(false);
    } catch (error) {
      let msg = HandleErr(error);
      toast({
        status: "error",
        title: "An error occurred",
        description: typeof msg === "string" ? msg : msg.error.message,
        isClosable: true,
        position: "bottom-right",
      });
      setVerifying(false);
    }
  };

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
            Viewing item : #{activeItem.regNumber} for {type}
            {loading && (
              <Center flexDir="column">
                <Spinner size="sm" />
                <small>loading more data</small>
              </Center>
            )}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {listing && !loading && (
              <Flex
                gap="5"
                flexDir={["column-reverse", "column-reverse", "row"]}
              >
                <Stack spacing="5" w={["full", "full", "60%"]}>
                  <Box>
                    <ImagesBox images={listing.display_image} />
                    {listing && (
                      <Box>
                        {(!listing.display_image ||
                          listing.display_image.length === 0) && (
                          <Text fontSize={"2xl"}>No images posted</Text>
                        )}
                      </Box>
                    )}
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
                    <BedBathSizeSection
                      bedroom={listing.bedroom}
                      bathroom={listing.bathroom}
                      interior_size={listing.interior_size}
                    />
                  </Box>
                  <PropertyDetails listing={listing} />
                </Stack>
                <Box w={["full", "full", "40%"]}>
                  {" "}
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
                  <UserDetails listing={listing} />
                </Box>
              </Flex>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            {listing && listing.verified ? (
              <Button disabled>Verified</Button>
            ) : (
              <Button
                onClick={verifyListing}
                disabled={verifying}
                isLoading={verifying}
                colorScheme={"green"}
              >
                Verify Listing
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SinglePropertModal;
