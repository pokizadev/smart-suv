import styled from "styled-components";
import { Container, Content } from "../components/Container";
import background from "../../assets/hero/background-7.png";
import { Button } from "../../design-system/button/Button";

const HeroContainer = styled(Container)`
    background-image: url(${background});
    height: 80vh;
    /* background-repeat: no-repeat; */
    background-size: cover;
    background-position: top;
   display: flex;
   justify-content: center;
`;

const HeroContent = styled(Content)`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    margin: 0;
`;
const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--space-40);
    width: 65%;
    padding-left: 3rem;
`;

const HeroText = styled.div`
    display: flex;
    flex-direction: column;

`;

const Span = styled.span`
    font-weight: var(--font-weight-600);
    font-size: var(--font-size-56);
    letter-spacing: 0.3rem;
    line-height: 1.5;
    background: linear-gradient(90deg, #00c6ff, #0072ff);
    background-clip: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: color 0.5s;

`;

const Title = styled.h1`
    font-weight: var(--font-weight-700);
    font-size: 12rem;
    letter-spacing: 0.5rem;

    background: linear-gradient(90deg, #00c6ff, #0072ff);
    background-clip: initial;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: transform color 0.5s;
`;

const HeroButton = styled(Button)`
    position: relative;
    display: inline-block;
    padding: 1rem 5rem;
    font-size: 2rem;
    font-weight: var(--font-weight-700);
    color: var(--white);
    background: linear-gradient(90deg, #30ccf7, #157bf7);
    background-clip: border-box;
    -webkit-background-clip: border-box;
    border: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    transition: background-color 0.3s, color 0.3s;
    width: 50%;
    background-color: transparent;
    border-radius: 1rem;

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 1rem;
        padding: 0.1rem;
        mask: initial;
        background: linear-gradient(90deg, #00c6ff, #0072ff);
        -webkit-mask: 
            linear-gradient(#fff 0 0) content-box, 
            linear-gradient( #ff3131 0 0);
        -webkit-mask-composite: xor;
        mask-composite: exclude;
    }

    &:hover {
        background-color: #0072ff;
        color: #fff;
        background-clip: border-box;
        -webkit-background-clip: border-box;
        -webkit-text-fill-color: #fff;
    }

    @media (max-width: 768px) {
        width: auto;
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: var(--space-72);
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroLeft>
                    <HeroText>
                        <Span>Stay Hydrated with</Span>
                        <Title>Smart Water</Title>
                    </HeroText>
                    <ButtonsWrapper>
                        
                        <HeroButton>
                        Order Now
                    </HeroButton>
                    </ButtonsWrapper>
                </HeroLeft>
            </HeroContent>
        </HeroContainer>
    );
};

export { Hero };
