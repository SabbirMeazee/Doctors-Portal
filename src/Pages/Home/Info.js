import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCart description='Lorem Ipsum is simply dummy text of the pri' cartTitle='Opening Hours' bgColor='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCart>
            <InfoCart cartTitle='Our Location' bgColor='bg-[#3A4256]' description='Brooklyn, NY 10036, United States' img={marker}></InfoCart>
            <InfoCart cartTitle='Contact Us Now' bgColor='bg-gradient-to-r from-secondary to-primary' description='+000 123 456789' img={phone}></InfoCart>
        </div>
    );
};

export default info;