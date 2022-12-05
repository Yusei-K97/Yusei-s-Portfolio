import { CenterTitle } from "../tools/styles/CenterTitle";
import { Twi } from "../tools/styles/LikeTwi";

const Skills = [
    {
    src: "https://img.icons8.com/plasticine/512/react.png",
    heading: "React",
    text: "★★☆：Can create website using this.",
    },
    {
    src: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400__480.png",
    heading: "Javascript",
    text: "★☆☆；Understanding basicly JavaScript, but didn't use this only.(unknown)",
    },
    {
    src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747__480.png",
    heading: "HTML5/CSS3",
    text: "★☆☆: Poor using CSS. So,compensate with chakra ui.",
    },
    {
    src: "https://cdn.pixabay.com/photo/2017/05/19/21/12/java-2327538__480.png",
    heading: "Java",
    text: "☆☆☆：Just basic...",
    },
    {
    src: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894__480.png",
    heading: "git/gitHub",
    text: "★☆☆：Experience => alone:〇, team:×",
    },
    {
    src: "https://cdn.pixabay.com/photo/2018/05/18/03/16/online-3410266__480.jpg",
    heading: "library",
    text: "★★☆: Using chakra ui, react-router-dom, swiper etc.",
    },
];


export const MySkill = () => {
    return(
        <>
            <CenterTitle title="My Skill" />
            {Skills.map((props) => {
                return <Twi src={props.src} heading={props.heading} text={props.text} />
            })}
        </>
    );
};