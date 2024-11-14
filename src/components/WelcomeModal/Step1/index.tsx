import { Flex, Fade, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Button } from "@chakra-ui/react";
import { Input } from "../../Input";
import { IStepProps } from "..";

export const Step1: FC<IStepProps> = ({
  value,
  handleInputChange,
  isNextStepAlowed,
  handleNextStage,
}) => {
  return (
    <Fade in transition={{ enter: { duration: 0.5 } }}>
      <Flex direction="column">
        <Text
          fontSize={11}
          fontWeight={700}
          color="#000"
          textTransform="none"
          mt={6}
        >
          Name
        </Text>
        <Input
          mb={6}
          mt={1}
          value={value}
          name="name"
          placeholder="Your name"
          onChange={handleInputChange}
        />
        <Text fontSize={11} fontWeight={700} color="#2C2C2C">
          Explore The Tour
        </Text>
        <Flex mt={16} width={"100%"} justifyContent={"flex-end"}>
          {/* move to next step */}
          <Button
            bgColor="#2C2C2C"
            color="#fff"
            variant="secondary"
            isDisabled={!isNextStepAlowed}
            onClick={handleNextStage}
            _hover={{ borderColor: "#2C2C2C" }}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    </Fade>
  );
};
