import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="card-title text-secondary mx-auto pb-3">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> :
                    <span className='text-red-400'>Not Available Now</span>
                }</p>

                <p>{slots.length} {slots.length > 1 ? 'Slots' : 'Slot'} Available</p>
                <div className="card-actions justify-center py-5">
                    <label onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="booking-modal" className="btn btn-primary bg-gradient-to-r from-secondary to-primary uppercase bold text-white">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;