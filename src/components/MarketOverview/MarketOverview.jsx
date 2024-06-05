import React from "react";
import Chart from "./Chart/Chart";
import { Flex, Box, Text, Heading, Center, Show } from "@chakra-ui/react";

const MarketOverview = () => {
  return (
    <Box
      border="1px solid"
      borderColor="custom.200"
      background="custom.150"
      width={{ base: "100%", lg: "calc(100% - 470px)", xxl: "930px" }}
      padding={{ base: "24px 10px", lg: "31px 28px" }}
      borderRadius="27px"
      mb={{ base: "20px", lg: "0" }}
    >
      <Heading
        as="h2"
        mb="-3px"
        fontSize={{ base: "20px", md: "30px" }}
        fontWeight="500"
        color="custom.50"
      >
        Market overview
      </Heading>

      <Text color="custom.300" mb="28px">
        Prices value updates
      </Text>
      <Flex
        justifyContent="space-between"
        mb="34px"
        flexDirection={{ base: "column", "2xl": "row" }}
      >
        <Flex>
          <Flex mr={{ base: "13px", lg: "24px" }}>
            <Box
              w="12px"
              h="12px"
              borderRadius="100%"
              bg="linear-gradient(to right, rgba(203, 178, 252, 1), rgba(164, 209, 235, 1),rgba(128, 166, 248, 1))"
              mt="5px"
              mr="10px"
            ></Box>
            <Flex flexDirection="column">
              <Text
                fontSize={{ base: "14px", xl: "16px" }}
                color="white"
                mb="-3px"
              >
                ETH-CORE
              </Text>
              <Text fontSize={{ base: "12px", xl: "14px" }} color="custom.100">
                Ethereum
              </Text>
            </Flex>
          </Flex>
          <Flex mr={{ base: "6px", lg: "25px" }}>
            <Box
              w="12px"
              h="12px"
              borderRadius="100%"
              bg="linear-gradient(to right, rgba(179, 133, 255, 1), rgba(136, 68, 252, 1))"
              mt="5px"
              mr="6px"
            ></Box>
            <Flex flexDirection="column">
              <Text
                fontSize={{ base: "14px", xl: "16px" }}
                color="white"
                mb="-3px"
              >
                Poly
              </Text>
              <Text fontSize={{ base: "12px", xl: "14px" }} color="custom.100">
                Polygon
              </Text>
            </Flex>
          </Flex>
          <Flex mr={{ base: "0", lg: "25px" }}>
            <Box
              w="12px"
              h="12px"
              borderRadius="100%"
              bg="linear-gradient(to right, rgba(234, 9, 9, 1), rgba(175, 13, 2, 1))"
              mt="5px"
              mr="8px"
            ></Box>
            <Flex flexDirection="column">
              <Text
                color="white"
                mb="-3px"
                fontSize={{ base: "14px", xl: "16px" }}
              >
                Poly Gaming
              </Text>
              <Text fontSize={{ base: "12px", xl: "14px" }} color="custom.100">
                Polygon
              </Text>
            </Flex>
          </Flex>

          <Show above="xl">
            <Center
              colorScheme="blue"
              w="100px"
              h="43px"
              border="1px solid"
              borderColor="custom.200"
              borderRadius="40px"
              cursor="pointer"
              _hover={{ bg: "teal.600" }}
              transition="0.4s ease"
            >
              <Center
                w="24px"
                height="24px"
                bg="custom.350"
                color="#fff"
                borderRadius="100%"
                mr="6px"
              >
                +
              </Center>
              <Text color="#fff">Add</Text>
            </Center>
          </Show>
        </Flex>

        <Show above="xl">
          <Center
            h="43px"
            border="1px solid"
            borderColor="custom.200"
            borderRadius="40px"
            transition="0.4s ease"
            width={{ base: "300px", "2xl": "auto" }}
            mt={{ base: "30px", "2xl": "auto" }}
          >
            <Center color="custom.100" padding="5px 15px" cursor="pointer">
              1D
            </Center>
            <Center
              color="custom.400"
              padding="5px 15px"
              cursor="pointer"
              borderRadius="40px"
              background="#00ff73"
            >
              1W
            </Center>
            <Center color="custom.100" padding="5px 15px" cursor="pointer">
              1M
            </Center>
            <Center color="custom.100" padding="5px 15px" cursor="pointer">
              1Y
            </Center>
          </Center>
        </Show>
      </Flex>
      <Chart />

      <Show below="xl">
        <Flex
          h="43px"
          border="1px solid"
          borderColor="custom.200"
          borderRadius="40px"
          transition="0.4s ease"
          justifyContent="space-evenly"
          mt="30px"
        >
          <Center color="custom.100" padding="5px 15px" cursor="pointer">
            1D
          </Center>
          <Center
            color="custom.400"
            padding="0 22px"
            cursor="pointer"
            borderRadius="28px"
            background="#00ff73"
            m="3px"
          >
            1W
          </Center>
          <Center color="custom.100" padding="5px 15px" cursor="pointer">
            1M
          </Center>
          <Center color="custom.100" padding="5px 15px" cursor="pointer">
            1Y
          </Center>
        </Flex>
      </Show>
    </Box>
  );
};

export default MarketOverview;
