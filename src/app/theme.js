import { extendTheme } from "@chakra-ui/react";
import "@fontsource/space-grotesk";

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
  xxl: "110em", // 1760px
};

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      "*": {
        wordBreak: "break-all",
      },
    },
  },

  colors: {
    custom: {
      50: "#FDFCFC",
      100: "#4E4F56",
      150: "#13141D",
      200: "#ffffff29",
      250: "#4D4E59",
      300: "#fdfcfc80",
      350: "#00ff73",
      400: "#101119",
      450: "#fc4e7e",
      500: "#ffffff14",
      550: "#23242b",
    },
  },
  fonts: {
    heading: "Space Grotesk",
    body: "Space Grotesk",
  },

  components: {
    Button: {
      variants: {
        pinkBorderedBtn: {
          borderRadius: "40px",
          position: "relative",
          padding: "10px 20px",
          color: "custom.50",
          background: "transparent",
          transition: ".4s ease",
          _before: {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: "inherit",
            padding: "1px",
            background:
              "linear-gradient(rgba(255, 111, 79, 1), rgba(255, 1, 221, 1))",
            WebkitMask:
              "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          },
          _hover: {
            opacity: "0.7",
          },
        },

        blueBorderedBtn: {
          borderRadius: "40px",
          border: "1px solid",
          borderColor: "rgba(65, 183, 255, 1)",
          padding: "8px 13px",
          fontSize: "12px",
          fontWeight: "500",
          color: "white",
          transition: ".4s ease",
          _hover: {
            opacity: "0.7",
          },
        },

        gradientBtn: {
          transition: ".4s ease",
          borderRadius: "40px",
          bgGradient:
            " linear-gradient(90deg, rgba(244,92,117,1) 0%, rgba(190,72,202,1) 40%, rgba(88,129,249,1) 100%)",
          color: "white",
          _hover: {
            opacity: "0.7",
          },
        },
      },
    },
  },
});

export default theme;
