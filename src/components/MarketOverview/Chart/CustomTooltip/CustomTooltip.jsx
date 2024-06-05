import { Flex, Text, Image } from "@chakra-ui/react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const hoveredLine = payload[0].dataKey;

    const hoveredData = payload.filter((data) => data.dataKey === hoveredLine);

    if (hoveredData.length) {
      return (
        <Flex
          flexDir="row"
          w="185px"
          h="45px"
          justifyContent="space-between"
          borderRadius="40px"
          background="custom.150"
          alignItems="center"
          padding="0 10px"
          border="1px solid"
          borderColor="custom.200"
        >
          <Flex flexDir="row" alignItems="center">
            <Image
              src="ETH-CORE.svg"
              alt="ETH-CORE"
              width="17px"
              height="17px"
              marginRight="6px"
            />
            <Flex flexDir="column">
              <Text color="custom.50" fontSize="12px" fontWeight="500">
                ETH-CORE
              </Text>
              <Text
                color="custom.100"
                fontSize="12px"
                fontWeight="400"
              >{`${hoveredLine}`}</Text>
            </Flex>
          </Flex>

          <Text color="custom.50" fontSize="16px" fontWeight="500">
            ${hoveredData[0].value}
          </Text>
        </Flex>
      );
    }
  }
  return null;
};

export default CustomTooltip;
