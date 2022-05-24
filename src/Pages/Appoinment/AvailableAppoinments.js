import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppoinments = ({ date }) => {
    const [services, setServices] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className='text-center mb-12'>
                <h2 className='text-xl text-secondary font-semibold'>Available Services on {format(date, 'PP')}</h2>
                <p>Please select a service.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <Service key={service._id} setTreatment={setTreatment} service={service}></Service>)
                }
            </div>
            {
                treatment && <BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>
            }
        </div>
    );
};

export default AvailableAppoinments;