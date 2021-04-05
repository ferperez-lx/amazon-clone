import React from 'react'
import styled from 'styled-components'

function Product2() {
    return (
        <Container>
            
            <Title>
                        AMD Ryzen 9 5950X 100-100000059WOF Processor 16-Core 3.4GHz Socket AM4 CPU w/o Fan Retail 
            </Title>

            <Price>
                    $1274.99
            </Price>
        
            <Rating>
                    ⭐⭐⭐⭐⭐
            </Rating>

            <Image src="https://i.imgur.com/dEEUmOl.jpg">
            </Image>

            <ActionSection>
                <AddToCartButton>
                    Add to cart
                </AddToCartButton>
            </ActionSection>
            
        </Container>
    )
}

export default Product2

const Container = styled.div `
    background-color: white;
    z-index: 100;
    flex: 1;
    padding: 20px;
    margin: 10px;
    max-height: 400px;
    display: flex;
    flex-direction: column;

`

const Title = styled.span`

`

const Price = styled.span`
    font-weight: 600;
    margin-top: 3px;

`

const Rating = styled.div`

`

const Image = styled.img`
    margin-top: 15px;
    max-height: 200px;
    object-fit: contain;
`

const ActionSection = styled.div`
    display: grid;
    place-items: center;
    margin-top: 12px;
`

const AddToCartButton = styled.button`
    width:100px;
    height: 30px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`

