import { Text } from "recharts";

export const getCustomTick = (tickObject) => {
  const {
    payload: { value },
  } = tickObject;
  switch (tickObject.index) {
    case 0: {
      return (
        <Text fontSize={14} {...tickObject}>
          $20,00
        </Text>
      );
    }
    case 1: {
      return (
        <Text fontSize={14} {...tickObject}>
          $40,00
        </Text>
      );
    }
    case 2: {
      return (
        <Text fontSize={14} {...tickObject}>
          $60,00
        </Text>
      );
    }
    case 3: {
      return (
        <Text fontSize={14} {...tickObject}>
          $80,00
        </Text>
      );
    }
    case 4: {
      return (
        <Text fontSize={14} {...tickObject}>
          $100,00
        </Text>
      );
    }
    case 5: {
      return (
        <Text fontSize={14} {...tickObject}>
          $120,00
        </Text>
      );
    }
    case 6: {
      return (
        <Text fontSize={14} {...tickObject}>
          $140,00
        </Text>
      );
    }
    case 7: {
      return (
        <Text fontSize={14} {...tickObject}>
          $160,00
        </Text>
      );
    }
    case 8: {
      return (
        <Text fontSize={14} {...tickObject}>
          $180,00
        </Text>
      );
    }
  }
};
