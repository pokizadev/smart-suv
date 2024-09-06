import { useState } from "react";
import styled from "styled-components";
import { Container, Content } from "../components/Container";
import ProductsImage from "../../assets/products5.png";
import ChevronRight from "../../assets/icons/chevron-right.png";
import ChevronLeft from "../../assets/icons/chevron-left (2).png";
import Product1 from "../../assets/product20 (1).png";
import Product2 from "../../assets/product10l.png";

const productData = [
    {
        image: ProductsImage,
        description:
            "We offer a variety of bottled water products designed to meet your hydration needs, whether at home, at work, or on the go. Enjoy the freshness and quality of our water in every bottle."
    },
    {
        image: Product1,
        description:
            "Our 20L bottle is ideal for families and offices, providing long-lasting hydration with ease and convenience."
    },
    {
        image: Product2,
        description:
            "Our 10L bottle is perfect for smaller households or gatherings, offering portability and freshness in every sip."
    }
];

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

const ChevronIcon = styled.img<{ disabled?: boolean }>`
    width: ${(props) => (props.disabled ? "0" : "4rem")};
    height: ${(props) => (props.disabled ? "0" : "4rem")};
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
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
    const [activeProductIndex, setActiveProductIndex] = useState(0);

    const handleNextProduct = () => {
        if (activeProductIndex < productData.length - 1) {
            setActiveProductIndex(activeProductIndex + 1);
        }
    };

    const handlePrevProduct = () => {
        if (activeProductIndex > 0) {
            setActiveProductIndex(activeProductIndex - 1);
        }
    };
    return (
        <Container>
            <ProductsContent>
                <ProductsSectionLeft>
                    <ProductsSectionImage
                        src={productData[activeProductIndex].image}
                    />
                </ProductsSectionLeft>
                <ProductsSectionRight>
                    <RightContent>
                        <ProductsSectionTitle>
                            Our Products
                        </ProductsSectionTitle>
                        <ProductsSectionText>
                            {productData[activeProductIndex].description}
                        </ProductsSectionText>
                    </RightContent>
                </ProductsSectionRight>
                <IconWrapper>
                    <ChevronIcon
                        src={ChevronLeft}
                        onClick={handlePrevProduct}
                        disabled={activeProductIndex === 0}
                    />
                    <ChevronIcon
                        src={ChevronRight}
                        onClick={handleNextProduct}
                        disabled={activeProductIndex === productData.length - 1}
                    />
                </IconWrapper>
            </ProductsContent>
        </Container>
    );
};

export { Products };
