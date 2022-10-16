import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { TbDimensions } from "react-icons/tb";

function BedBathSizeSection({ bedroom, bathroom, interior_size }) {
  return (
    <HStack flexWrap={"wrap"} style={{ marginBlock: "0", marginInline: "0" }}>
      <HStack spacing="1" pr="4">
        <Icon fontSize="18px" my="2" as={FaBed} />
        <Text textTransform={"capitalize"} fontSize="sm">
          {bedroom}
        </Text>
      </HStack>
      <HStack
        spacing="1"
        pr="4"
        style={{ marginBlock: "0", marginInline: "0" }}
      >
        <Icon fontSize="18px" my="2" as={FaBath} />
        <Text textTransform={"capitalize"} fontSize="sm">
          {bathroom}
        </Text>
      </HStack>
      <HStack
        spacing="1"
        pr="4"
        style={{ marginBlock: "0", marginInline: "0" }}
      >
        <Icon fontSize="18px" my="2" as={TbDimensions} />
        <Text textTransform={"capitalize"} fontSize="sm">
          {interior_size}
        </Text>
      </HStack>
    </HStack>
  );
}

export default BedBathSizeSection;
