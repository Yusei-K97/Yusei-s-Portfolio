import React, { memo } from "react";
import { Center, Box } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";

export const Loading = memo(() => {
  return (
    <Center
      as='header'
      h='100vh'
      bgColor='blackAlpha.700'
      w='100vw'
      fontSize='6vw'
      fontWeight='900'>
      <Triangle
        ariaLabel="triangle-loading"
        visible={true}
        />
      <p>Now Loading...</p>
    </Center>
  );
});
