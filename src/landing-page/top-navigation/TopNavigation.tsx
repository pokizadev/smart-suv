import styled from "styled-components";
import { useState } from "react";

import { Container, Content } from "../components/Container";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Button } from "../../design-system/button/Button";
import english from "../../assets/icons/united-kingdom.png";
import uzbek from "../../assets/icons/uzbekistan.png";
import russian from "../../assets/icons/russia.png";
import languageIcon from "../../assets/icons/internet.png";
import chevronDown from "../../assets/icons/chevron-down-svgrepo-com.svg";

export const links = [
    { text: "Home", link: "/" },
    { text: "About Company", link: "company" },
    { text: "Products", link: "products" },
    { text: "Importance of Water", link: "water" },
    { text: "Contact Us", link: "contact-us" }
];

const NavigationContent = styled(Content)`
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LogoWrapper = styled.div`
    width: 20%;
`;

const Logo = styled.img`
    height: 8rem;
    width: 10rem;
`;

const NavigationLinks = styled.ul`
    display: flex;
    gap: var(--space-42);
    align-items: center;
`;

const Link = styled(NavLink)`
    font-size: 1.8rem;
    color: var(--text-color);
    font-weight: var(--font-weight-500);
    border-radius: 0.6rem;
    background-position: center;
    background-color: transparent;
    padding-left: var(--space-8);
    padding-right: var(--space-8);
    padding-top: var(--space-4);
    padding-bottom: var(--space-4);
    /* padding: 0.8rem; */

    &:hover,
    &:focus {
        height: var(--space-36);
        background-color: #f7f7f7;
    }

    &.active {
        height: var(--space-36);

        border-radius: 0.6rem;
        background-color: #f7f7f7;
    }
`;

// const ButtonsWrapper = styled.div`
//     display: flex;
//     gap: var(--space-16);
// `;

const LanguageButton = styled.div`
    width: 7rem;
    position: relative;
    display: flex;
    /* justify-content: space-between; */
    text-align: center;
    align-items: center;
    font-size: 1.8rem;
    color: var(--text-color);
    font-weight: var(--font-weight-500);
    background-color: #f7f7f7;
    border-radius: 0.6rem;
    padding-left: var(--space-12);
    padding-right: var(--space-8);
    padding-top: var(--space-4);
    padding-bottom: var(--space-4);

`;

// const LanguageIcon = styled.img`
//     height: 1.7rem;
//     width: 1.7rem;
//     margin-right: 0.6rem;
//     vertical-align: top;
// `;

const ChevronDown = styled.img`
    height: 1.8rem;
    width: 1.8rem;
    margin-left: 0.8rem;

`;

const ModalWrapper = styled.div`
    width: 7rem;
    position: absolute;
    top: 94%;
    right: 0;
    background-color: #f7f7f7;
    border-radius: 0.6rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    padding-left: var(--space-4);
    padding-top: var(--space-8);
    padding-bottom: var(--space-8);
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: flex-start;
    z-index: 1000;
    gap: 0.5rem;
`;

const TopNavigation = () => {
    const [showLanguages, setShowLanguages] = useState(false);

    const handleLanguageIconOnClick = () => {
        setShowLanguages(!showLanguages);
    };
    return (
        <Container>
            <NavigationContent>
                <LogoWrapper>
                    <Logo src={logo} />
                </LogoWrapper>

                <NavigationLinks>
                    {links.map((link, idx) => {
                        return (
                            <li key={idx}>
                                <Link to={link.link} end>
                                    {link.text}
                                </Link>
                            </li>
                        );
                    })}
                </NavigationLinks>
                    <LanguageButton
                        onClick={handleLanguageIconOnClick}
                    >
                        {/* <LanguageIcon src={english} /> */}
                        En
                        <ChevronDown src={chevronDown} />
                        {showLanguages && (
                            <ModalWrapper>
                                <Button size="sm" color="gray">
                                    {/* <LanguageIcon src={russian} /> */}
                                    Ru
                                </Button>

                                <Button size="sm" color="gray">
                                    {/* <LanguageIcon src={uzbek} /> */}
                                    Uz
                                </Button>
                            </ModalWrapper>
                        )}
                    </LanguageButton>
                    {/* <Button size="sm" color="primary">
                        Order Now
                    </Button> */}
            </NavigationContent>
        </Container>
    );
};

export { TopNavigation };
