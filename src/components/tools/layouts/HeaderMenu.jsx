import React from "react";
import { Link } from "react-router-dom";
import {slide as Menu} from "react-burger-menu";
import { Avatar, HStack, Stack, Box } from '@chakra-ui/react'
import "./Menu.css";

export const HeaderMenu = () => {
    return (
        <Menu>
            <Link to="/">
                <HStack>
                <Avatar src="https://cdn.pixabay.com/photo/2017/07/11/00/24/house-2492054__480.png"/>
                <Stack>
                    <Box>Home</Box>
                </Stack></HStack></Link>
            <Link to="/aboutme">
                <HStack>
                <Avatar src="https://cdn.pixabay.com/photo/2014/08/13/07/25/i-love-myself-417267__480.jpg"/>
                <Stack>
                    <Box>About Me</Box>
                </Stack></HStack></Link>
            <Link to="/myskill">
                <HStack>
                <Avatar src="https://cdn.pixabay.com/photo/2017/10/21/12/36/training-2874597__480.jpg"/>
                <Stack>
                    <Box>My Skill</Box>
                </Stack></HStack></Link>
            <Link to="/production">
            <HStack>
                <Avatar src="https://cdn.pixabay.com/photo/2014/11/04/08/07/mark-516277__480.jpg"/>
                <Stack>
                    <Box>Production</Box>
                </Stack></HStack></Link>
            <Link to="/contact">
                <HStack>
                <Avatar src="https://cdn.pixabay.com/photo/2019/07/03/05/58/envelope-4313721__480.png"/>
                <Stack>
                    <Box>Contact</Box>
                </Stack></HStack>
            </Link>
        </Menu>
    );
};

