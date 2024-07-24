import styled from "styled-components";
import TypewriterComponent from "typewriter-effect";
import { Container, Content } from "../components/Container";
import background from "../../assets/hero/background-5.jpg";

const HeroContainer = styled(Container)`
    background-image: url(${background});
    width: 100%;
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const HeroContent = styled(Content)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    margin: 0;
`;
const HeroLeft = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 55%;
`;

const HeroText = styled.div`
    font-weight: var(--font-weight-700);
    font-size: 9rem;
    color: var(--white);
    display: flex;
    text-align: left;
`;

const Hero = () => {
    return (
        <HeroContainer>
            <HeroContent>
                <HeroLeft>
                    <HeroText>
                        <TypewriterComponent
                            options={{
                                strings: ["Smart Decision", "Smart Water"],
                                autoStart: true,
                                loop: true
                            }}
                        />
                    </HeroText>
                </HeroLeft>
            </HeroContent>
        </HeroContainer>
    );
};

export { Hero };
