import { Company } from "./landing-page/company-section/Company";
import { Hero } from "./landing-page/hero-section/Hero";
import { Products } from "./landing-page/products-section/Products";
import { TopNavigation } from "./landing-page/top-navigation/TopNavigation";
import { Water } from "./landing-page/water-section/Water";

const App = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Company />
            <Products />
            <Water />
        </>
    );
};

export { App };
