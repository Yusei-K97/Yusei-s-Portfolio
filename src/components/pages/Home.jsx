import React from "react";
import { Avatar, HStack, Stack, Heading, Text, Center } from '@chakra-ui/react';

export const Home = () => {
    return(
      <Center m={6}>
        <HStack fontFamily="cursive">
          <Avatar src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" size="2xl" />
          <Stack>
            <Heading fontSize="3xl">Y-Kimura</Heading>
            <Text fontSize="4xl">Welcome to my portfolio website!<br />Take your time.</Text>
          </Stack>
        </HStack>
        </Center>
  );
};