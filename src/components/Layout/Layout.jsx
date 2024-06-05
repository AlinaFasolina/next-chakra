import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header/Header";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <main>
        <Flex>
          <Sidebar />
          <Box w="100%">{children}</Box>
        </Flex>
      </main>
    </Box>
  );
};

export default Layout;
