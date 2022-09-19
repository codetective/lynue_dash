import { Box, chakra, useColorModeValue, useRadio } from "@chakra-ui/react";
import React from "react";

function RadioButton(props) {
  const { timeStamp, ...radioProps } = props;
  const { state, getInputProps, getCheckboxProps, htmlProps } =
    useRadio(radioProps);

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps({})} hidden />
      <Box
        {...getCheckboxProps()}
        borderBottom={state.isChecked ? "1px solid" : "none"}
        borderBottomColor={useColorModeValue("black", "gray.500")}
        p={1}
        fontSize="sm"
        whiteSpace={"nowrap"}
      >
        {timeStamp}
      </Box>
    </chakra.label>
  );
}

export default RadioButton;
