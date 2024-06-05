"use client";
import { Flex, Image, Button, Box, Show, Text } from "@chakra-ui/react";
import React from "react";
import { Select } from "chakra-react-select";
import { selectStyles } from "./selectStyles";
import { dropdownData } from "./dropdownData";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        padding={{ base: "15px 28px", "2xl": "0 76px" }}
        height={{ base: "80px", md: "134px" }}
        bg="linear-gradient(to bottom,#040507, #0f1018)"
        borderBottom="1px solid "
        borderColor="custom.500"
      >
        <Show below="md">
          <Image
            src="hamburger.svg"
            alt="hamburger"
            width="24px"
            height="24px"
            cursor="pointer"
            transition=".4s ease"
            _hover={{
              opacity: "0.7",
            }}
          />
        </Show>

        <Link href="/">
          <Flex
            flexDirection={{ base: "column ", md: "row" }}
            alignItems="center"
          >
            <Box
              width={{ base: "29px", md: "53px" }}
              height={{ base: "32px", md: "58px" }}
              mr={{ base: "0", md: "16px" }}
              mb={{ base: "10px", md: "0" }}
            >
              <Image
                alt="Logo"
                src="Logo.svg"
                w="100%"
                height="100%"
                cursor="pointer"
              />
            </Box>

            <Image
              src="DeHive.svg"
              width={{ base: "52px", md: "108px" }}
              cursor="pointer"
              alt="DeHive"
            />
          </Flex>
        </Link>

        <Show above="md">
          <Flex>
            <Box mr="20px">
              <Select
                components={{
                  IndicatorSeparator: () => null,
                }}
                colorScheme="purple"
                chakraStyles={selectStyles}
                placeholder="Polygon"
                options={dropdownData}
              />
            </Box>
            <Button
              variant="gradientBtn"
              h="55px"
              width={{ md: "160px", "2xl": "185px" }}
            >
              Connect wallet
            </Button>
          </Flex>
        </Show>

        <Show below="md">
          <Button variant="blueBorderedBtn" h="28px" w="75px">
            Connect
          </Button>
        </Show>
      </Flex>
      <Show below="md">
        <Flex
          justifyContent="space-between"
          alignItems="center"
          bg="custom.150"
          h="60px"
          padding="0 15px"
          borderBottom="1px solid"
          borderColor="custom.500"
        >
          <Text color="custom.50" fontWeight="500">
            TVL: $234.567,26
          </Text>

          <Select
            components={{
              IndicatorSeparator: () => null,
            }}
            colorScheme="purple"
            chakraStyles={selectStyles}
            placeholder="Polygon"
            options={dropdownData}
          />
        </Flex>
      </Show>
    </header>
  );
};

export default Header;
