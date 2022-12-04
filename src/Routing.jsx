import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { AboutMe } from "./components/pages/AboutMe";
import { MySkill } from "./components/pages/MySkill";
import { Production } from "./components/pages/Production";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";
import { Header } from "./components/tools/layouts/Header";
import { Footer } from "./components/tools/layouts/Footer";
import { Sliding } from "./components/tools/layouts/Sliding";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/aboutme" element={<AboutMe />}/>
                <Route path="/myskill" element={<MySkill />}/>
                <Route path="/production" element={<Production />}/>
                <Route path="/contact" element={<Contact />} />
                {/* 予期せぬエラー時用、NotFoundコンポ*/}
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Sliding />
            <Footer />
        </BrowserRouter>
  );
}