import React from "react";
import { Center } from '@chakra-ui/react';

export const CenterTitle = (props) => {
    return(
        <Center fontFamily="cursive" fontSize="6xl">{props.title}</Center>
    );
};