import React, { useEffect, useState } from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import { Routing } from './Routing';
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
        <Loading />
      </ChakraProvider>
    );
  return (
    <ChakraProvider theme={theme}>
      <Routing />
    </ChakraProvider>
  );
}

export default App;