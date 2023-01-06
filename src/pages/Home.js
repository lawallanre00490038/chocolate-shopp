import React from 'react';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Review from '../Components/Review';
import Faq from '../Components/Faq';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'



const Home = () => {
  return (
    <div>
        <Navbar />
        
        <Header />
        <Body />
        <Review />
        <Faq />

        <Footer />
    </div>
  )
}

export default Home