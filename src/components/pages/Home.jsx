import React from "react";
import { Avatar, HStack, Stack, Heading, Box } from '@chakra-ui/react';

export const Home = () => {
    return(
      <>
        <HStack>
          <Avatar size="xl" src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" />
          <Stack>
            <Heading size="l">Y-Kimura</Heading>
            <Box size="xl">welcome to my portfolio website!<br />Take your time.</Box>
          </Stack>
        </HStack>

        <h1>home</h1>

        </>
  );
};