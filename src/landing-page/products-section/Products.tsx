import styled from "styled-components";
import { Container, Content } from "../components/Container";
import ProductsImage from "../../assets/products.png"

const ProductsContent = styled(Content)`
    display: flex;
`;

const ProductsSectionLeft = styled.div`
    width: 50%;
    padding: var(--space-60);
`
const ProductsSectionTitle = styled.h2`
    font-size: var(--font-size-64);
    color: var(--text-color);
    margin-bottom: var(--space-28);
`
const ProductsSectionText = styled.p`
    font-size: var(--font-size-18);
    line-height: var(--line-height-28);
    color: var(--text-color);
`
const ProductsSectionRight = styled.div`
    width: 50%;
    padding: var(--space-60);
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`

const ProductsSectionImage = styled.img`
    border-radius: 5rem;
    filter: brightness(1.2);
`;
const Products = () => {
    return (
        <Container>
            <ProductsContent>
                <ProductsSectionLeft>
                    <ProductsSectionTitle>Our Products</ProductsSectionTitle>
                    <ProductsSectionText>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptate iusto libero dolore facere necessitatibus vitae! Repudiandae rerum, at consectetur accusamus ea dignissimos doloremque impedit, explicabo adipisci molestias quaerat quasi.
                    </ProductsSectionText>
                </ProductsSectionLeft>
                <ProductsSectionRight>
                    <ProductsSectionImage src={ProductsImage}/>
                </ProductsSectionRight>
            </ProductsContent>
        </Container>
    );
};

export { Products };
