import pic1 from "./img1.jpg";
import pic2 from "./img2.jpg";
import pic3 from "./img3.jpg";
import pic4 from "./img4.jpg";
import pic5 from "./img5.jpg";

export const Pic1 = () => {
    return <img src={pic1} alt="Home" />
}

export const Pic2 = () => {
    return <img src={pic2} alt="AboutMe" height="10%"/>
}

export const Pic3 = () => {
    return <img src={pic3} alt="MySkill" />
}

export const Pic4 = () => {
    return <img src={pic4} alt="Production" />
}

export const Pic5 = () => {
    return <img src={pic5} alt="Contact" />
}