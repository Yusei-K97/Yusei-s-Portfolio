import React from "react";
import { Link } from "react-router-dom";
import {slide as Menu} from "react-burger-menu";
import "./Menu.css";

export const HeaderMenu = () => {
    return (
        <Menu>
            <Link to="/"></Link>
            <Link to="/aboutme"></Link>
            <Link to="/myskill"></Link>
            <Link to="/production"></Link>
            <Link to="/contact"></Link>
        </Menu>
    );
};