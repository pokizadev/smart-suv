import styled from "styled-components";
import { Container, Content } from "../components/Container";
import { Button } from "../../design-system/button/Button";
import waterVideo from "../../assets/background.mp4";

const WaterContainer = styled(Container)`
    position: relative;
    width: 100%;
    height: 80vh;
    overflow: hidden;
`;

const VideoBackground = styled.video`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
`;

// const WaterContent = styled.div`
//     z-index: 1;
//     max-width: 600px;
//     padding: 20px;
//     background: rgba(0, 0, 0, 0.5);
//     border-radius: 10px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
// `;

const Heading = styled.h1`
    text-align: center;
    font-size: var(--font-size-40);
    margin-bottom: var(--space-60);
    margin-top: var(--space-60);
    line-height: var(--line-height-40);
    color: var(--text-color);
`;

const Text = styled.p`
    font-size: var(--font-size-30);
    line-height: var(--line-height-48);
    color: var(--text-color);
    padding-left: var(--space-60);
    padding-right: var(--space-60);
`;

const ButtonWrapper = styled.div`
    display: flex;
    gap: var(--space-72);
    justify-content: flex-end;
`;

const WaterButton = styled(Button)`
    padding: 1rem 5rem;
    font-size: 2rem;
    color: var(--text-color);
    background: linear-gradient(90deg, #30ccf7, #157bf7);
    text-align: center;
    width: 30%;
    border-radius: 1rem;

    &:hover {
        background-color: #0072ff;
    }

    @media (max-width: 768px) {
        width: auto;
        padding: 0.5rem 1rem;
        font-size: 1rem;
    }
`;

const Water = () => {
    return (
        <WaterContainer>
            <VideoBackground autoPlay loop muted>
                <source src={waterVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </VideoBackground>
            <Content>
                <Heading>Stay Hydrated, Stay Healthy</Heading>
                <Text>
                    Drinking enough fresh water every day is essential for
                    maintaining optimal health and well-being. Water plays a
                    vital role in regulating body temperature, supporting
                    digestion, and flushing out toxins. Proper hydration boosts
                    energy levels, enhances concentration, and keeps skin
                    looking healthy. Without sufficient water intake, the body
                    can become dehydrated, leading to fatigue, headaches, and
                    other health issues. Make it a habit to stay hydrated and
                    enjoy the benefits of a refreshed mind and body
                </Text>
                <ButtonWrapper>
                    <WaterButton>Learn more</WaterButton>
                </ButtonWrapper>
            </Content>
        </WaterContainer>
    );
};

export { Water };
