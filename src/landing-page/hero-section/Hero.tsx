import styled from "styled-components";
import { Container, Content } from "../components/Container";
import background from "../../assets/hero/background-3.jpg";

const HeroContainer = styled(Container)`
    background-image: url(${background});
    width: 100%;
    height: 350rem;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: top;
`;

const HeroLeft = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeroText = styled.p`
    font-weight: var(--font-weight-700);
    font-size: var(--font-size-80);
    line-height: var(--line-height-96);
    color: var(--white);
    
    padding-top: var(--space-80);
    padding-bottom: var(--space-80);
`;

const Hero = () => {
    return (
        <HeroContainer>
            <Content>
                <HeroLeft>
                    <HeroText>Drink smart, Live smart!</HeroText>
                </HeroLeft>
            </Content>
        </HeroContainer>
    );
};

export { Hero };
