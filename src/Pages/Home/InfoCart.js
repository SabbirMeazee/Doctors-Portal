import React from 'react';

const InfoCart = ({ img, cartTitle, bgColor, description }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl py-6 ${bgColor}`}>
            <figure>
                <img className='pl-6' src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-white font-bold">{cartTitle}</h2>
                <p className='text-white'>{description}</p>

            </div>
        </div >
    );
};

export default InfoCart;