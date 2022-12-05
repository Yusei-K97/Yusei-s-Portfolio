import React from "react";
import { HStack, Avatar, Stack, Heading, Text } from '@chakra-ui/react';

export const Twi = (props) => {
    return(
        <HStack bgColor="gray.900"
            color="white"
            border="1px"
            borderColor="gray.500"
            padding={5}
            rounded={20}
            margin={5}
        >
            <Avatar src={props.src} size="2xl" />
                <Stack>
                    <Heading fontSize="3xl">{props.heading}</Heading>
                        <Text fontSize="4xl">{props.text}</Text>
                </Stack>
        </HStack>
    );
};