import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service
    return (
        <div class="card bg-base-100 shadow-xl">
            <div class="card-body text-center">
                <h2 class="card-title text-secondary mx-auto pb-3">{name}</h2>
                <p>{slots.length ? <span>{slots[0]}</span> :
                    <span className='text-red-400'>Not Available Now</span>
                }</p>

                <p>{slots.length} {slots.length > 1 ? 'Slots' : 'Slot'} Available</p>
                <div class="card-actions justify-center py-5">
                    <label onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        for="booking-modal" class="btn btn-primary uppercase bold text-white">Book Appoinment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;