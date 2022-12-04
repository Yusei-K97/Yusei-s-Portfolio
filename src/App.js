import React, { useEffect, useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Routing } from './Routing';
import Fonts from "./components/tools/styles/fonts";
import { theme } from "./components/tools/styles/theme";
import { Loading } from "./components/tools/Loading";

const App = () => {
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
      setTimeout(() => setIsloading(false), 2000);
  }, []);
  if (isLoading)
    return (
      <ChakraProvider theme={theme}>
        <Fonts />
        <Loading />
      </ChakraProvider>
    );
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Routing />
    </ChakraProvider>
  );
}

export default App;