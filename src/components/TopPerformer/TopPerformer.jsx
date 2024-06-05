import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  Heading,
  Show,
} from "@chakra-ui/react";
import React from "react";
import { performerItemList } from "./PerformerItem/data";
import PerformerItem from "./PerformerItem/PerformerItem";

const TopPerformer = () => {
  return (
    <Box width={{ base: "100%", xxl: "1410px" }}>
      <Heading
        as="h2"
        mb={{ base: "10px", lg: "20px" }}
        fontSize={{ base: "20px", md: "30px" }}
        fontWeight="500"
        color="custom.50"
      >
        Top performer
      </Heading>
      <Flex
        h={{ base: "auto", xl: "270px" }}
        bg="linear-gradient(to right, rgba(241, 167, 231, 0.11) 5%,
        rgba(219, 57, 197, 0.11) 10%,
        rgba(194, 77, 209, 0.11) 15%,
        rgba(106, 96, 193, 0.11),
        rgba(72, 114, 177, 0.11),
        rgba(94, 172, 200, 0.11),
        rgba(29, 31, 46, 0.09),
        rgba(29, 31, 46, 0))"
        border="1px solid"
        borderColor="custom.200"
        borderRadius="24px"
        padding={{ base: "15px 15px", md: "15px 120px", lg: "50px 35px" }}
        position="relative"
        _after={{
          position: "absolute",
          top: { base: "10px", md: "20px" },
          left: { base: "-2px", lg: "-6px" },
          width: { base: "100px", lg: "121px" },
          height: { base: "32px", lg: "44px" },
          display: "block",
          content: '""',
          backgroundImage: "url(impulse.svg)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          cursor: "pointer",
        }}
      >
        <Flex
          alignItems="center"
          w="100%"
          flexDirection={{ base: "column", xl: "row" }}
        >
          <Flex
            flexDirection="row"
            w={{ base: "100%", lg: "540px" }}
            flexShrink="0"
            mr={{ base: "0", xxl: "18px" }}
            mb={{ base: "10px", md: "30px", xl: "0" }}
            justifyContent={{ base: "center", xl: "flex-start" }}
          >
            <Show above="lg">
              <Box mr="18px">
                <Image
                  maxWidth="initial"
                  width="165px"
                  height="170px"
                  src="top-perf.svg"
                  alt="Top performer"
                />
              </Box>
            </Show>
            <Flex
              w={{ base: "100%" }}
              flexDirection="column"
              pt={{ base: "30px", md: "13px" }}
            >
              <Flex
                alignItems="center"
                mb="6px"
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
                <Show below="lg">
                  <Box mr="8px">
                    <Image
                      w="78px"
                      height="80px"
                      src="top-perf.svg"
                      alt="Top performer"
                    />
                  </Box>
                </Show>
                <Text
                  color="custom.50"
                  fontWeight="500"
                  fontSize={{ base: "20px", xl: "24px" }}
                  mr="5px"
                >
                  DHV / QUICK
                </Text>
                <Image
                  cursor="pointer"
                  transition="0.4s ease"
                  _hover={{ opacity: 0.6 }}
                  src="question.svg"
                  mr="10px"
                  alt="question"
                />
                <Show above="xl">
                  <Center
                    cursor="pointer"
                    transition="0.4s ease"
                    _hover={{ opacity: 0.6 }}
                    color="custom.350"
                    fontWeight="500"
                    fontSize="12px"
                    w="32px"
                    h="34px"
                    bg="url(GET.svg)"
                  >
                    GET
                  </Center>
                </Show>
              </Flex>

              <Flex
                fontSize="12px"
                fontWeight="400"
                mb="15px"
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
                <Flex
                  order={{ base: "1", sm: "1" }}
                  alignItems="center"
                  border="1px solid"
                  borderColor="custom.200"
                  padding="4px 7px"
                  borderRadius="100px"
                  mr="4px"
                  h="28px"
                >
                  <Text fontWeight="400" color="custom.50">
                    QuickSwap
                  </Text>
                </Flex>
                <Flex
                  order={{ base: "3", sm: "2" }}
                  alignItems="center"
                  border="1px solid"
                  borderColor="custom.200"
                  padding="8px 7px"
                  borderRadius="100px"
                  mr="4px"
                  h="28px"
                >
                  <Text fontWeight="400" color="custom.50" as="span">
                    Volatility:
                  </Text>
                  <Text fontWeight="400" color="custom.350" as="span" ml="5px">
                    <Show above="sm">Very Low</Show>
                    <Show below="sm">Low</Show>
                  </Text>
                </Flex>
                <Flex
                  order={{ base: "2", sm: "3" }}
                  alignItems="center"
                  border="1px solid"
                  borderColor="custom.200"
                  padding="8px 7px"
                  borderRadius="100px"
                  mr="4px"
                  h="28px"
                  fontWeight="400"
                >
                  <Text color="custom.50" as="span">
                    Risk:
                  </Text>
                  <Text fontWeight="400" color="custom.450" as="span" ml="5px">
                    <Show above="sm"> Very High</Show>
                    <Show below="sm">High</Show>
                  </Text>
                </Flex>
              </Flex>

              <Show above="lg">
                <Flex flexDirection="column">
                  <Text color="custom.50" fontWeight="400" fontSize="18px">
                    Your rewards:{" "}
                  </Text>
                  <Flex alignItems="center">
                    <Text
                      color="custom.350"
                      fontWeight="500"
                      fontSize="24px"
                      mr="8px"
                    >
                      $10,678.12
                    </Text>
                    <Flex
                      border="1px solid"
                      borderColor="custom.200"
                      padding="0 7px"
                      height="28px"
                      borderRadius="100px"
                      mr="4px"
                    >
                      <Image
                        width="16px"
                        heigth="16px"
                        src="icon-orange.svg"
                        mr="8px"
                        alt="crypto icon"
                      />
                      <Image
                        width="16px"
                        heigth="16px"
                        src="icon-blue.svg"
                        mr="8px"
                        alt="crypto icon"
                      />
                      <Image
                        width="16px"
                        heigth="16px"
                        src="icon-sea-wave.svg"
                        alt="crypto icon"
                      />
                    </Flex>
                  </Flex>
                  <Text color="custom.300">Accumulated rewards</Text>
                </Flex>
              </Show>

              <Show below="lg">
                <Flex justifyContent="space-between" alignItems="center">
                  <Flex flexDirection="column">
                    <Text color="custom.50" fontWeight="400">
                      Your rewards:{" "}
                    </Text>

                    <Text color="custom.350" fontWeight="500">
                      $10,678.12
                    </Text>
                  </Flex>
                  <Button
                    fontSize="13px"
                    fontWeight="500"
                    variant="blueBorderedBtn"
                    w="120px"
                    h="35px"
                    color="custom.50"
                  >
                    Claim rewards
                  </Button>
                </Flex>
              </Show>
            </Flex>
          </Flex>

          <Flex
            justifyContent={{ base: "center", xl: "space-between" }}
            flexDirection={{ base: "column", lg: "row" }}
            w={{ base: "100%", xl: "100%" }}
          >
            <Show above="lg">
              <Flex
                w={{ base: "initial", xl: "100%", xxl: "544px" }}
                gap={{ base: "10px", sm: "30px", xl: "0" }}
                justifyContent={{ base: "center", xl: "space-between" }}
                alignItems="center"
                flexDirection="row"
              >
                {performerItemList.map((item) => (
                  <PerformerItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    description={item.description}
                    hint={item.hint}
                  />
                ))}
              </Flex>
            </Show>

            <Show below="lg">
              <Flex flexDirection="column" mb="30px">
                {performerItemList.map((item) => (
                  <PerformerItem
                    key={item.id}
                    title={item.title}
                    amount={item.amount}
                    description={item.description}
                    hint={item.hint}
                  />
                ))}
              </Flex>
            </Show>

            <Flex
              flexDirection={{ base: "row", lg: "column" }}
              paddingLeft={{ base: "0", lg: "20px", xxl: "0" }}
              justifyContent={{ base: "space-between", xl: "center" }}
            >
              <Button
                width={{
                  base: "120px",
                  sm: "180px",
                  xl: "110px",
                  xxl: "180px",
                }}
                variant="gradientBtn"
                h="50px"
                mb="30px"
              >
                Stake
              </Button>
              <Button
                width={{
                  base: "120px",
                  sm: "180px",
                  xl: "110px",
                  xxl: "180px",
                }}
                variant="pinkBorderedBtn"
                h="50px"
              >
                Unstake
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopPerformer;
