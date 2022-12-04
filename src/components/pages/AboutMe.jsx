import React from "react";
import { Center, HStack, Avatar, Stack, Heading, Text } from '@chakra-ui/react';

export const CenterTitle = (props) => {
    return(
        <Center fontFamily="cursive" fontSize="6xl">{props.title}</Center>
    );
};

export const AboutMe = () => {
    return(
        <>
            <CenterTitle title="About Me"/>
                <HStack>
                    <Avatar src="https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg" size="2xl" />
                    <Stack>
                        <Heading fontSize="3xl">Y-Kimura</Heading>
                            <Text fontSize="4xl">千葉県出身。大学では栄養学を学び、卒業後はドラッグストアで約２年間勤務しました。
                                                モダンなWebサイトとＩＴ技術に興味を持ち、独学でReactを勉強しております。
                                                フロントエンドエンジニアとして勤務すべく、現在転職活動中です。
                            </Text>
                    </Stack>
                </HStack>
        </>
    );
};