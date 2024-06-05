import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import MarketOverview from "../MarketOverview/MarketOverview";
import RecentActivities from "../RecentActivities/RecentActivities";
import TopPerformer from "../TopPerformer/TopPerformer";

const Dashboard = () => {
  return (
    <Flex
      bg="#0F1018"
      p={{ base: "31px 10px 50px", xl: "82px 20px 50px" }}
      alignItems="center"
      w="100%"
      flexDirection="column"
    >
      <Flex flexDirection="column" w="100%" alignItems="center">
        <Heading
          as="h1"
          width={{ base: "100%", xxl: "1410px" }}
          color="#fff"
          fz={{ base: "24px", lg: "48px" }}
          fontWeight="500"
          mb={{ base: "31px", lg: "43px" }}
        >
          Dashboard
        </Heading>
        <Flex
          width={{ base: "100%", xxl: "1410px" }}
          mb={{ base: "29px", lg: "45px" }}
          justifyContent="space-between"
          alignItems="stretch"
          flexDirection={{ base: "column", lg: "row" }}
          w="100%"
        >
          <MarketOverview />
          <RecentActivities />
        </Flex>
      </Flex>

      <TopPerformer />
    </Flex>
  );
};

export default Dashboard;
