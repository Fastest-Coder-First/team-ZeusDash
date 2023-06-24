import React from 'react';
import Navbar from '../dashcomponents/Navbar';
import Footer from '../dashcomponents/Footer';  
import MainHome from '../dashcomponents/MainHome';
import Features from '../dashcomponents/Features';
import Reviews from '../dashcomponents/Reviews';

function Home() {
  return (
    <>
    <Navbar />
    <MainHome/>
    <Features/>
    <Reviews/>
    <Footer/>
    
    </>
  )
}

export default Home