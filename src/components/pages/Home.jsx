import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Text, Center, Flex } from '@chakra-ui/react';

export const Home = () =>{
    const c = useRef();
    useEffect(() => {
      gsap.to(c.current, {
        backgroundImage: "linear-gradient( to left, #00ffff , #ff69b4)",
        duration: 5,
        opacity: 1,
      });
    }, [c]);

    return(
      <Flex w='100%' h='100vh' justifyContent='center' alignItems='center'>
        <Center
          ref={c}
          fontSize='6vw'
          backgroundClip='text'
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          fontWeight='900'
          opacity='0'>
          <Text as='c' textAlign='center'>Welcome to my<br />portfolio website!<br />Please take your time.</Text>
        </Center>
      </Flex>
  );
}