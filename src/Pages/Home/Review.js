import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review.review}</p>
                <div className='flex items-center py-5'>
                    <div className="avatar ">
                        <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div className='pl-5'>
                        <h2>{review.name}</h2>
                        <p>California</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;