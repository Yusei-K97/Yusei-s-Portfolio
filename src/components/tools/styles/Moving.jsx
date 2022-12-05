import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Mv = (props) => {
    const [ isLoading, setIsloading ] = useState(true);
    useEffect (()=>{
        setTimeout(() => setIsloading(false), 0);
    },[])
    useEffect(() => {
        if (!isLoading)  {
            gsap.registerPlugin(ScrollTrigger);
            setAnimation();
        }
    },[])

    const setAnimation = () => {
        gsap.fromTo(
            "#wrapper-a p",
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                scrollTrigger: {
                    trigger: "#wrapper-a",
                    start: "top center",
                    end: "bottom center",
                    onEnter: () => {
                        console.log("Scroll In")
                    },
                    onEnterBack: () => {
                    console.log("Scroll Back")
                    },
                },
            }
        )
    }
    return(
        <>
            {props.e}
        </>
    );
}