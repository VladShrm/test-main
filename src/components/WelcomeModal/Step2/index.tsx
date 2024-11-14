import { Flex, Fade, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Input } from "../../Input";
import { IStepProps } from "..";

export const Step2: FC<IStepProps> = ({
  value,
  handleInputChange,
  isNextStepAlowed,
  handleNextStage,
  handleBack,
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
          Job title
        </Text>
        <Input
          mb={6}
          mt={1}
          name="jobTitle"
          value={value}
          placeholder="Your job title"
          onChange={handleInputChange}
        />
        <Text fontSize={11} fontWeight={700} color="#2C2C2C">
          Explore The Tour
        </Text>
        <Flex mt={16} width={"100%"} justifyContent={"flex-end"}>
          <ButtonGroup>
            {/* move back to first step */}
            <Button
              color="#fff"
              bgColor="#2C2C2C"
              variant="secondary"
              onClick={handleBack}
            >
              Back
            </Button>
            {/* move to next step */}
            <Button
              variant="secondary"
              color="#fff"
              bgColor="#2C2C2C"
              isDisabled={!isNextStepAlowed}
              onClick={handleNextStage}
              _hover={{ borderColor: "#2C2C2C" }}
            >
              Submit
            </Button>
          </ButtonGroup>
        </Flex>
      </Flex>
    </Fade>
  );
};
