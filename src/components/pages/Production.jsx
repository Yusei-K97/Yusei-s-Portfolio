import React from "react";
import { CenterTitle } from "../tools/styles/CenterTitle";
import { Link } from "react-router-dom";
import { Twi } from "../tools/styles/LikeTwi";

export const Production = () => {
    return (
        <>
            <CenterTitle title="Production" />
            <Link to="/">
            <Twi src="https://cdn.pixabay.com/photo/2022/03/15/18/06/portfolio-7070886__480.png"
                heading="Portfolio website"
                text="Using React(Javascript),HTML5 and CSS3.
                Main Library:Chakra ui, Swiper, react-router-dom, GSAP etc."
            />
            </Link>
            <Link to="#">
                <Twi src="https://cdn.pixabay.com/photo/2015/11/03/08/56/question-mark-1019820_1280.jpg"
                    heading="unknown"
                    text="Coming soon..."
                />
            </Link>
        </>
    );
};