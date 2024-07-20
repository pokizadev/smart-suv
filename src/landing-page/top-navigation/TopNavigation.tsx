import styled from "styled-components";
import { Container, Content } from "../components/Container";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Button } from "../../design-system/button/Button";
import english from "../../assets/icons/united-kingdom.png";
import uzbek from "../../assets/icons/uzbekistan.png";
import russian from "../../assets/icons/russia.png";
import languageIcon from "../../assets/icons/internet.png";
import { useState } from "react";

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
    font-size: 1.6rem;
    color: var(--text-color);

    &:hover,
    &:focus {
        color: var(--primary);
    }

    &.active {
        color: var(--primary);
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: var(--space-16);
`;

const LanguageButton = styled(Button)`
    width: 7rem;
    position: relative;
`;

const LanguageIcon = styled.img`
    height: 1.7rem;
    width: 1.7rem;
    margin-right: 0.6rem;
    vertical-align: top;
`;

const ModalWrapper = styled.div`
    width: 7rem;
    position: absolute;
    top: 94%;
    right: 0;
    background-color: #ecf0f1;
    border-radius: 0.6rem;
    border-top-right-radius: 0;
    border-top-left-radius: 0;

    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    gap: 1rem;
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
                <ButtonsWrapper>
                    <LanguageButton
                        size="sm"
                        color="gray"
                        onClick={handleLanguageIconOnClick}
                    >
                        <LanguageIcon src={languageIcon} />
                        EN
                        {showLanguages && (
                            <ModalWrapper>
                                <Button size="sm" color="gray">
                                    <LanguageIcon src={russian} />
                                    RU
                                </Button>

                                <Button size="sm" color="gray">
                                    <LanguageIcon src={uzbek} />
                                    UZ
                                </Button>

                            </ModalWrapper>
                        )}
                    </LanguageButton>
                    <Button size="sm" color="primary">
                        Order Now
                    </Button>
                </ButtonsWrapper>
            </NavigationContent>
        </Container>
    );
};

export { TopNavigation };
