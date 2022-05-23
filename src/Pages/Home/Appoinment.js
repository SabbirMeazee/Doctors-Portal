import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appoinment from '../../assets/images/appointment.png'
import Button from '../Shared/Button';

const Appoinment = () => {
    return (
        <section style={{ background: `url(${appoinment})` }} className='flex justify-center items-center my-24 px-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='text-white py-5 lg:flex-1'>
                <h1 className='font-bold text-secondary'>Appointment</h1>
                <h2 className='font-semibold text-3xl mt-4'>Make an appointment Today</h2>
                <p className='py-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>
            </div>
        </section>
    );
};

export default Appoinment;