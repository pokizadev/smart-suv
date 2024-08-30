import { Container, Content } from "../components/Container";
import styled from "styled-components";
import CompanyImg from "../../assets/companyleft.png";

const CompanyContent = styled(Content)`
    display: flex;
`;

const CompanySectionLeft = styled.div`
    width: 50%;
    padding: var(--space-60);
`;

const CompanySectionImage = styled.img`
    border-radius: 5rem;
    filter: brightness(1.2);
`;
const CompanySectionRight = styled.div`
    width: 50%;
    padding: var(--space-60);
`;

const CompanySectionTitle = styled.h2`
    font-size: var(--font-size-64);
    color: var(--text-color);
    margin-bottom: var(--space-28);
`;

const CompanySectionText = styled.p`
    font-size: var(--font-size-18);
    line-height: var(--line-height-28);
    color: var(--text-color);
`;

const Company = () => {
    return (
        <Container>
            <CompanyContent>
                <CompanySectionLeft>
                    <CompanySectionImage src={CompanyImg} />
                </CompanySectionLeft>
                <CompanySectionRight>
                    <CompanySectionTitle>Our Company</CompanySectionTitle>
                    <CompanySectionText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda obcaecati repellendus voluptas quidem fugit blanditiis nemo, eveniet numquam totam accusantium aut quis reprehenderit dignissimos optio suscipit natus itaque ipsa! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas iusto ad repudiandae aperiam explicabo, qui magni sapiente aut reiciendis temporibus a hic, cum quidem veniam voluptatibus, vero fugiat debitis quam?
                    </CompanySectionText>
                </CompanySectionRight>
            </CompanyContent>
        </Container>
    );
};

export { Company };
