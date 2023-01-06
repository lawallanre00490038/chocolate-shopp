import React, { useEffect, useState }from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Product from './Product'

const Products = () => {
    const [searchedProducts, setSearchedProducts] = useState([]);

    const getSearchedProducts = async ()=> {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot');
        const json = await resp.json();
        setSearchedProducts(json)
    }

    useEffect(()=> {
        getSearchedProducts();
        console.log(searchedProducts)
    });
    

    return (
            <>  
                <Navbar />
                <div className="row p-3 container mx-auto ms-6 mt-5 justify-content-center">
                    {
                        searchedProducts.map((product, index) => {
                            return (
                                <Product product={product} key={index} />
                            )
                        })
                    }
                </div>
                <Footer />
            </>
        )
}


  


export default Products