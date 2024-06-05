import { Show, Box, Image, Flex, Tooltip } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  return (
    <Show above="md">
      <aside>
        <Box
          pt="40px"
          bg="custom.150"
          h="100%"
          w={{ base: "100px", "2xl": "212px" }}
          cursor="pointer"
        >
          <Flex justifyContent="center">
            <Tooltip
              borderTopLeftRadius="100px"
              borderTopRightRadius="100px"
              borderBottomRightRadius="100px"
              borderBottomLeftRadius="0"
              placement="auto-start"
              label="Dashboard"
              fz="14px"
              color="custom.50"
              border="1px solid"
              borderColor="custom.200"
              w="106px"
              height="30px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              background="custom.150"
            >
              <Flex
                position="relative"
                _before={{
                  position: "absolute",
                  top: "23px",
                  left: "25px",
                  content: "url(Dashboard-icon-inner.svg)",
                }}
              >
                <Image src="Dashboard-icon.svg" alt="Dashboard icon" />
              </Flex>
            </Tooltip>
          </Flex>
        </Box>
      </aside>
    </Show>
  );
};

export default Sidebar;
