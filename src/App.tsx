import { Company } from "./landing-page/company-section/Company";
import { Hero } from "./landing-page/hero-section/Hero";
import { TopNavigation } from "./landing-page/top-navigation/TopNavigation";

const App = () => {
    return (
        <>
            <TopNavigation />
            <Hero />
            <Company />
        </>
    );
};

export { App };
