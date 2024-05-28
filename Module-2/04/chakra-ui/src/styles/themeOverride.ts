import { extendTheme } from "@chakra-ui/react";
// import type { StyleFunctionProps } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
        // bg: "blue.200",
      },
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
          fontSize: "40px",
        },
      },
      sizes: {
        sm: {},
      },
    },
  },
});

export default theme;
