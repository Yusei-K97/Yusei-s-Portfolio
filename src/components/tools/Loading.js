import React, { memo } from "react";
import { Center } from "@chakra-ui/react";
import { Triangle } from "react-loader-spinner";

export const Loading = memo(() => {
  return (
    <Center
      as='header'
      h='100vh'
      bgColor='teal.100'
      w='100vw'
      fontSize='6vw'
      fontWeight='900'>
      <Triangle
        color="#33CC33"
        ariaLabel="triangle-loading"
        visible={true}
        />
        <p>Now Loading...</p>
    </Center>
  );
});
