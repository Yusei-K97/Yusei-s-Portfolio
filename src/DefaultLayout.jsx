import { Header } from "./components/tools/layouts/parts/Header";
import { Footer } from "./components/tools/layouts/parts/Footer";
import { Sliding } from "./components/tools/layouts/parts/Sliding";

export const DefaultLayout = (props) => {
    const {children} = props;
    return(
        <>
            <Header />
            {children}
            <Sliding />
            <Footer />
        </>
    );
}