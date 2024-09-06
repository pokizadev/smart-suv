import { Container, Content } from "../components/Container";
import styled from "styled-components";
import CompanyImg from "../../assets/companyleft.png";
import { Button } from "../../design-system/button/Button";

const CompanyContent = styled(Content)`
    display: flex;
`;

const CompanySectionRight = styled.div`
    width: 50%;
    padding: var(--space-60);
`;

const CompanySectionImage = styled.img`
    border-radius: 5rem;
    filter: brightness(1.2);
`;
const CompanySectionLeft = styled.div`
    width: 50%;
    padding: var(--space-60);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const CompanySectionTitle = styled.h2`
    font-size: var(--font-size-64);
    color: var(--text-color);
    margin-bottom: var(--space-14);
`;

const CompanySectionText = styled.p`
    font-size: var(--font-size-18);
    line-height: var(--line-height-28);
    color: var(--text-color);
`;

const CompanyButton = styled(Button)`
    position: relative;
    display: inline-block;
    padding: 1rem 5rem;
    font-size: 2rem;
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
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 1rem;
        padding: 0.1rem;
        mask: initial;
        background: linear-gradient(90deg, #00c6ff, #0072ff);
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#ff3131 0 0);
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

const ButtonWrapper = styled.div`
    display: flex;
    gap: var(--space-72);
`;

const Company = () => {
    return (
        <Container>
            <CompanyContent>
                <CompanySectionLeft>
                    <CompanySectionTitle>Our Company</CompanySectionTitle>
                    <CompanySectionText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestias assumenda obcaecati repellendus voluptas
                        quidem fugit blanditiis nemo, eveniet numquam totam
                        accusantium aut quis reprehenderit dignissimos optio
                        suscipit natus itaque ipsa!
                    </CompanySectionText>
                    <ButtonWrapper>
                        <CompanyButton>More about us</CompanyButton>
                    </ButtonWrapper>
                </CompanySectionLeft>
                <CompanySectionRight>
                    <CompanySectionImage src={CompanyImg} />
                </CompanySectionRight>
            </CompanyContent>
        </Container>
    );
};

export { Company };
