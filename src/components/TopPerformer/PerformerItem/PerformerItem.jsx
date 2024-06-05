import { Flex, Image, Text, Show, Box } from "@chakra-ui/react";
import React from "react";

const PerformerItem = ({ title, amount, description, hint }) => {
  return (
    <>
      <Show below="lg">
        <Flex
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          mb="5px"
        >
          <Flex>
            <Text fontSize="14px" color="custom.300" fontWeight="500">
              {title}
            </Text>
            {hint ? (
              <Image
                display="inline"
                ml="8px"
                cursor="pointer"
                src="question.svg"
                transition="0.4s ease"
                _hover={{ opacity: 0.7 }}
                alt="question"
              />
            ) : null}
          </Flex>
          <Flex flexDirection="column" alignItems="end">
            <Text fontSize="14px" color="custom.50" fontWeight="500" mb="-3px">
              {amount}
            </Text>
            <Text fontSize="12px" color="custom.300" fontWeight="400">
              {description}
            </Text>
          </Flex>
        </Flex>
      </Show>

      <Show above="lg">
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize={{base:"18px", "2xl":"24px"}} color="custom.250" mb="7px">
            {title}
          </Text>
          <Flex fontSize={{base:"18px", "2xl":"24px"}} color="custom.50" mb="-2px">
            {amount}
            {hint ? (
              <Image
                display="inline"
                ml="8px"
                cursor="pointer"
                src="question.svg"
                transition="0.4s ease"
                _hover={{ opacity: 0.7 }}
                alt="question"
              />
            ) : null}
          </Flex>
          <Text color="custom.300" fontSize={{base:"12px", "2xl":"16px"}}> {description}</Text>
        </Flex>
      </Show>
    </>
  );
};

export default PerformerItem;
