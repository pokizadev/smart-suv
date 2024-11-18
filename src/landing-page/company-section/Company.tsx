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
    padding: 1rem 5rem;
    font-size: 2rem;
    color: var(--white);
    background: linear-gradient(90deg, #30ccf7, #157bf7);
    text-align: center;
    width: 50%;
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
