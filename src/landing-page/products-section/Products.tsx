import { useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../components/Container";
import ProductsImage from "../../assets/products5.png";
import ChevronRight from "../../assets/icons/chevron-right.png";
import ChevronLeft from "../../assets/icons/chevron-left (2).png";
import Product1 from "../../assets/product20 (1).png";
import Product2 from "../../assets/product10l.png";



const ProductsContent = styled(Content)`
    display: flex;
    position: relative;
`;

const ProductsSectionRight = styled.div`
    width: 50%;
    padding: var(--space-60);
    display: flex;
`;

const RightContent = styled.div`
    display: flex;
    flex-direction: column;
`;

const IconWrapper = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 83%;
    justify-content: space-between;
`;



const ProductsSectionTitle = styled.h2`
    font-size: var(--font-size-64);
    color: var(--text-color);
    margin-bottom: var(--space-32);
`;
const ProductsSectionText = styled.p`
    width: 75%;
    font-size: var(--font-size-18);
    line-height: var(--line-height-28);
    color: var(--text-color);
`;
const ProductsSectionLeft = styled.div`
    width: 50%;
    padding: var(--space-60);
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

const ProductsSectionImage = styled.img`
    border-radius: 5rem;
    filter: brightness(1.2);
`;

const Products = () => {
   
    return (
        <Container>
            <ProductsContent>
                <ProductsSectionLeft>
                    <ProductsSectionImage
                        src={ProductsImage}
                    />
                </ProductsSectionLeft>
                <ProductsSectionRight>
                    <RightContent>
                        <ProductsSectionTitle>
                            Our Products
                        </ProductsSectionTitle>
                        <ProductsSectionText>
                        We offer a variety of bottled water products designed to meet your hydration needs, whether at home, at work, or on the go. Enjoy the freshness and quality of our water in every bottle.
                        </ProductsSectionText>
                    </RightContent>
                </ProductsSectionRight>
                
            </ProductsContent>
        </Container>
    );
};

export { Products };
