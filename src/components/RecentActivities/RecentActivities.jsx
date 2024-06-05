import React from "react";
import { Box, Text, Flex, Image, Show, Heading } from "@chakra-ui/react";
import { recentActivitiesList } from "./data";
import { getGradientColor, getImgStyles } from "@/utils/utils";

const RecentActivities = () => {
  return (
    <Flex
      overflowX="auto"
      maxWidth="calc(100vw - 20px)"
      height="100%"
      display={{ base: "block", lg: "contents" }}
      sx={{
        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          background: "custom.150",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "custom.200",
          borderRadius: "4px",
        },
        "&::-webkit-scrollbar-thumb:hover": {
          background: "custom.300",
        },
      }}
    >
      <Box
        border="1px solid"
        borderColor="custom.200"
        background="custom.150"
        width={{ base: "100%", lg: "450px" }}
        minWidth="450px"
        maxWidth="100%"
        padding={{ base: "24px 15px", lg: "38px 28px" }}
        borderRadius="27px"
      >
        <Show breakpoint="(max-width: 479px)">
          <Heading
            as="h2"
            mb="19px"
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight="500"
            color="custom.50"
          >
            Assets
          </Heading>
        </Show>
        <Show breakpoint="(min-width: 480px)">
          <Heading
            as="h2"
            mb="19px"
            fontSize={{ base: "20px", md: "30px" }}
            fontWeight="500"
            color="custom.50"
          >
            Recent Activities
          </Heading>
        </Show>

        <Flex flexDirection="column" fontWeight={400}>
          {recentActivitiesList &&
            recentActivitiesList.map((item) => (
              <Flex key={item.id} mb="15px">
                <Box
                  color="#fff"
                  minH="33px"
                  width={{ base: "39%", lg: "160px" }}
                >
                  <Flex>
                    <Box width="20px" marginRight="15px">
                      <Image
                        mt="3px"
                        src={item.imgSrc}
                        alt={item.imgAlt}
                        minW={getImgStyles(item.name).minWidth}
                        position={getImgStyles(item.name).position}
                        right={getImgStyles(item.name).right}
                      />
                    </Box>
                    <Box>
                      <Text fontSize={["14px", "16px"]} mb="-4px">
                        {item.name}
                      </Text>
                      <Text color="custom.100" fontSize={["12px", "14px"]}>
                        {item.type}
                      </Text>
                    </Box>
                  </Flex>
                </Box>
                <Box
                  minH="33px"
                  fontSize={["14px", "16px"]}
                  color="#fff"
                  width={{ base: "30%", lg: "110px" }}
                >
                  {item.amount}
                </Box>
                <Box minH="33px" color="#fff">
                  <Text
                    fontSize={["14px", "16px"]}
                    mb="-4px"
                    sx={{
                      background: getGradientColor(item.status),
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {item.status}
                  </Text>
                  <Text fontSize={["12px", "14px"]} color="custom.100">
                    {item.time}
                  </Text>
                </Box>
              </Flex>
            ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default RecentActivities;
