import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  SimpleGrid,
  Spinner,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import cogoToast from "cogo-toast";
import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HandleErr from "../../utils/axiosErrHandler";
import { API_HOSTNAME } from "../../utils/config";
import AlertComponent from "../AlertComponent";
import CustomBox from "../DashBoard/CustomBox";
import SectionHeading from "../DashBoard/SectionHeading";
import PropertyItem from "./PropertyItem";
import SinglePropertModal from "./SinglePropertModal";

function Listings({ type = "sale", baseUrl }) {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [activeItem, setActiveItem] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const url =
    type === "sale" ? "/unverified/sell/property" : "/unverified/rent/property";

  const fetchListings = useCallback(async () => {
    setLoading(true);
    setListings([]);
    setError(false);
    try {
      let result = await axios.get(API_HOSTNAME + url);
      console.log(result);
      setListings(result.data);
      setLoading(false);
    } catch (error) {
      let msg = HandleErr(error);
      cogoToast.error(typeof msg === "string" ? msg : msg.error.message);
      setError(typeof msg === "string" ? msg : msg.error.message);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchListings();
  }, [fetchListings]);

  return (
    <Box>
      <CustomBox>
        <HStack justify="space-between">
          <SectionHeading
            textTransform="uppercase"
            fontWeight="semibold"
            fontSize={["md", "lg", "xl"]}
          >
            {" "}
            {type === "sale" ? (
              "Sale Listings"
            ) : (
              <Box as="span" textTransform={"uppercase"}>
                {type} Listings
              </Box>
            )}
          </SectionHeading>
          <Button colorScheme={"blue"}>
            <Link to={type === "sale" ? "rent" : baseUrl + "/listings"}>
              {type === "sale" ? "See Rent Listings" : "See Sale Listings"}
            </Link>
          </Button>
        </HStack>
      </CustomBox>
      <Divider />

      {listings.length > 0 && (
        <SimpleGrid py="10" columns={[1, 2, 2]} spacing="8">
          {listings.map((l, i) => (
            <PropertyItem
              setActive={setActiveItem}
              openModal={onOpen}
              item={l}
              key={i}
            />
          ))}
        </SimpleGrid>
      )}

      {!loading && error && (
        <AlertComponent
          status={"error"}
          message={error}
          action={
            <Button colorScheme="teal" onClick={fetchListings}>
              Retry
            </Button>
          }
        />
      )}
      {loading && (
        <Center minH="40vh">
          <Spinner size="xl" />
        </Center>
      )}
      {activeItem && (
        <SinglePropertModal
          activeItem={activeItem}
          onClose={onClose}
          isOpen={isOpen}
          type={type}
        />
      )}
    </Box>
  );
}

export default Listings;
