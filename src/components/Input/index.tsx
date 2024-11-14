import { Input as DefaultInput } from "@chakra-ui/react";
import React from "react";

export const Input = ({ ...props }) => {
  return (
    <DefaultInput
      width="auto"
      fontSize="sm"
      background="transparent"
      borderColor="#2C2C2C"
      focusBorderColor="#2C2C2C"
      placeholder="Your name"
      _hover={{ borderColor: "#2C2C2C" }}
      {...props}
    />
  );
};
