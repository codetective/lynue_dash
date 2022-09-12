import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import lynue_logo from "../assets/lynuee.png";

export const Logo = ({ baseUrl = "/", ...rest }) => {
  return (
    <Box {...rest} as={Link} to={baseUrl.toString()} fontSize="lg" py="5">
      <Image w="85%" src={lynue_logo} />
    </Box>
  );
};
