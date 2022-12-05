import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { AboutMe } from "./components/pages/AboutMe";
import { MySkill } from "./components/pages/MySkill";
import { Production } from "./components/pages/Production";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";
import { DefaultLayout } from "./DefaultLayout";
import { Header } from "./components/tools/layouts/parts/Header.jsx";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>}/>
                <Route path="/aboutme" element={<DefaultLayout><AboutMe /></DefaultLayout>}/>
                <Route path="/myskill" element={<DefaultLayout><MySkill /></DefaultLayout>}/>
                <Route path="/production" element={<DefaultLayout><Production /></DefaultLayout>}/>
                <Route path="/contact" element={<><Header /><Contact /></>} />
                <Route path="*" element={<DefaultLayout><NotFound /></DefaultLayout>} />
            </Routes>
        </BrowserRouter>
    );
}