import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Product = (props) => {
    const { product } = props;

  return (
    <>
        <Card className="card bg-light shadow-lg border-0 m-2" style={{width: "18rem", cursor: "pointer"}}>
            <Links to={`/ProductDetails/${product.id}`}>
                <img src={product.image} alt='' className="card-img-top" style={{width: "100%", height: "370.66px"}}/>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text offset-9">${ Math.floor(Math.random(3) * 10) + 3 }.99</p>
                </div>
            </Links>
            

        </Card>
    </>
  )
}

const Links = styled(Link)`
    text-decoration: none;
    color: black;
`
const Card = styled.div`
    min-height: 25rem;
    margin: 1rem 1.5rem;
    position: relative;


    img {
        border-radius: 2rem;
        height: 80%;
        width: 100%;
        // position: absolute;
        // left: 0;
        object-fit: cover;
    }
`
export default Product;