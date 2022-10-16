import { Box, Image, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import React, { useState } from "react";

function ImagesBox({ images }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Box>
      <Box h="300px" bg={bg}>
        <Image
          h="full"
          w="full"
          objectFit={"cover"}
          src={images[activeImageIndex].url}
        />
      </Box>
      <SimpleGrid spacing="1" columns={images.length} py="2">
        {images.map((img, i) => (
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
    </Box>
  );
}

export default ImagesBox;
