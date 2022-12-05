import React from "react";
import { CenterTitle } from "../tools/styles/CenterTitle";
import { Twi } from "../tools/styles/LikeTwi";

const Is = [
    {
    src: " https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    heading: "Y-Kimura",
    text: "千葉県出身。大学では栄養学を学び、卒業後はドラッグストアで約２年間勤務しました。モダンなWebサイトとＩＴ技術に興味を持ち、独学でReactを勉強しております。フロントエンドエンジニアとして勤務すべく、現在転職活動中です。",
    },
    {
    src: "https://cdn.pixabay.com/photo/2017/09/25/13/12/puppy-2785074_1280.jpg",
    heading: "Y-Kimura",
    text: "2022年9月からJavaの勉強をきっかけに、プログラミング学習を開始しました。11月から当サイトの作成に着手しております。",
    },
];

export const AboutMe = () => {
    return(
        <>
            <CenterTitle title="About Me"/>
            { Is.map((props) => {
                return <Twi src={props.src} heading={props.heading} text={props.text} />
                })}
        </>
    );
}