import { extendTheme } from "@chakra-ui/react";
export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        color: "glay.900",
      },
    },
  },
  fonts: {
    heading: "Heading Font Name",
    body: "Body Font Name",
  },
});
