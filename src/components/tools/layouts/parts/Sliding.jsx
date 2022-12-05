import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import { Link } from "react-router-dom";
import { Pic1, Pic2, Pic3, Pic4, Pic5 } from "../img/imgExp";
import 'swiper/css';

SwiperCore.use([Autoplay, Pagination]);
export const Sliding = () => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween = {30}
                slidesPerView={3}
                autoplay={{
                    "delay": 3500,
                    "disableOnInteraction": false,
                }}
                pagination={{"clickable": true}}
            >
                <SwiperSlide>
                    <Link to="/"><Pic1 /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/aboutme"><Pic2 /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/myskill"><Pic3 /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/production"><Pic4 /></Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/contact"><Pic5 /></Link>
                </SwiperSlide>
            </Swiper>
        </>
    );
};