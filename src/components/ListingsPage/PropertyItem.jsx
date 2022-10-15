import {
  Badge,
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaBath, FaBed, FaExternalLinkAlt } from "react-icons/fa";
import { TbDimensions } from "react-icons/tb";

function PropertyItem({ item, setActive, openModal }) {
  return (
    <Box
      h="fit-content"
      shadow="base"
      rounded="lg"
      bg={useColorModeValue("white", "gray.700")}
      pos="relative"
    >
      <IconButton
        icon={<FaExternalLinkAlt />}
        pos="absolute"
        top="5"
        right="5"
        fontSize="xl"
        title="open full view"
        colorScheme="purple"
        onClick={() => {
          setActive(item);
          openModal();
        }}
      />
      <Box h="200px">
        <Image
          src={item.display_image[0].url}
          objectFit="cover"
          h="full"
          w="full"
        />
      </Box>
      <Box p="3">
        <HStack justifyContent={"space-between"} spacing="3" flexWrap="wrap">
          <Badge px="2" mr="4">
            {item.propertyType}
          </Badge>
          <Text
            style={{ marginBlock: "0", marginInline: "0" }}
            fontWeight="bold"
          >
            ₦{Intl.NumberFormat("en-US").format(item.price)}
          </Text>
        </HStack>
        <HStack
          py="3"
          flexWrap={"wrap"}
          style={{ marginBlock: "0", marginInline: "0" }}
        >
          <HStack spacing="1" pr="4">
            <Icon fontSize="18px" my="2" as={FaBed} />
            <Text textTransform={"capitalize"} fontSize="sm">
              {item.bedroom}
            </Text>
          </HStack>
          <HStack
            spacing="1"
            pr="4"
            style={{ marginBlock: "0", marginInline: "0" }}
          >
            <Icon fontSize="18px" my="2" as={FaBath} />
            <Text textTransform={"capitalize"} fontSize="sm">
              {item.bathroom}
            </Text>
          </HStack>
          <HStack
            spacing="1"
            pr="4"
            style={{ marginBlock: "0", marginInline: "0" }}
          >
            <Icon fontSize="18px" my="2" as={TbDimensions} />
            <Text textTransform={"capitalize"} fontSize="sm">
              {item.interior_size}
            </Text>
          </HStack>
        </HStack>
        <HStack>
          <Icon fontSize="18px" my="2" as={BiCategory} />

          <Text fontWeight="semibold" textTransform={"capitalize"}>
            {item.category}
          </Text>
        </HStack>
      </Box>
    </Box>
  );
}

export default PropertyItem;
