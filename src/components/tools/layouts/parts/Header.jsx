import React from "react";
import {HeaderMenu} from "./HeaderMenu";
import { Box, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <Box w="100%" h="120px" bgColor="black">
            <HeaderMenu />
            <Center
                className="HeaderTitle"
                fontSize="4xl"
                p={2}
                fontFamily="fancy"
                color="blue.500"
                _hover={{color: "teal.500"}}
                >
                <Link to="/">Yusei's<br/>Portfolio</Link>
                <a href='https://github.com/Yusei-K97'>
                    <i className="fab fa-github gold fa-lg"></i>
                </a>
                </Center>
        </Box>
    );
}