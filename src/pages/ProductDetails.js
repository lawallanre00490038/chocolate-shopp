import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';


const ProductDetails = () => {
  
  const [ productDetails, setProductDetails ] = useState([]);

  const params = useParams();

    const getProduct = async (id)=> {
        const resp = await fetch(`https://api.sampleapis.com/coffee/hot/${id}`);
        const json = await resp.json();
        setProductDetails(json)
    }
  
  useEffect(()=> {
    getProduct(params.id)
  }, [params])

  const { id, image, title, price, description} = productDetails;


  return (
    <div>
      <Navbar />
        <div className="m-5 mb-5 d-flex justify-content-between">
          <div className='d-flex flex-column w-50 col-12 col-md-6'>
            <div className='text-center'>
              <ImgContainer src= {image} alt='product' id={id}  className='text-bg-light' />
            </div>
            <div className='fs-5 text-justify mt-3' style={{width: "400px", margin: "0 auto"}}>
              <h5>{ description } </h5>
              <div className='d-flex justify-content-center'>
                <h6> <span style={{color: "#7B3F00"}}>FREE SHIPPING</span> </h6>
              </div>
            </div>
          </div>


          <div className='right flex-grow-1 text-black m-3 w-50 col-12 col-md-6'>
            <h2>{title}</h2>
            <div className='d-flex justify-content-between align-items-center mb-5'>
              <div>
                <h4>{price}</h4>
                <div>
                  <p>Quantity</p>
                  <div className='border mb-5 fs-6 px-0 text-center'>
                    <span>+</span><span>1</span><span>-</span>
                  </div>
                </div>
              </div>


              <div className='p-5'>
                <p className='px-3'><span> <input type="radio" className="" id="" /> </span>One time purchase <span className='border px-3'>4 weeks</span></p>

                <div className=''>
                  <p className='border px-3 '>  <span> <input type="radio" className='checked' id="" defaultChecked="true"/> </span>
                    Subscribe now and ger 10% discount <br /> on every recurring Order. The discount will <br /> be applied at check out. <span className='text-success'>See details</span>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <button type="button" className='px-5' style={{backgroundColor: "#7B3F00"}}><img src="https://res.cloudinary.com/oluwaloni/image/upload/v1666619060/Cart.png" alt="" />+Add to cart</button>
            </div>

            <div className='border p-2 mt-5 w-75'>
              <p> Wax: <span className='text-muted'> Top grade soy wax that delivers a smoke less, consistent burn.</span></p>
             
              <p> Frangrance:  <span> Premium quality ingredients with natural essential oils.</span></p>

              <p className=''> Burning Time: <span>70-75hours</span> <span>Dimension: 10cm x 5cm</span> <span>Weight: 400g</span></p>
              
            </div>
          </div>
        </div>
        <Footer />
    </div>
  )
}


// const Card = styled.div`
//     min-height: 25rem;
//     border-radius: 2rem;
//     margin: 1rem 0;
//     position: relative;
// `

const ImgContainer = styled.img`
    border-radius: 2rem;
    height: 400px;
    width: 400px;
    object-fit: cover;
`

export default ProductDetails