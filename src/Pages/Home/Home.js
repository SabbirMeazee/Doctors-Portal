import React from 'react';
import Footer from '../Shared/Footer';
import Appoinment from './Appoinment';
import Banner from './Banner';
import Info from './Info'
import Services from './Services';
import Testomonial from './Testomonial';
import Treatment from './Treatment';
const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <Treatment></Treatment>
            <Appoinment></Appoinment>
            <Testomonial></Testomonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;