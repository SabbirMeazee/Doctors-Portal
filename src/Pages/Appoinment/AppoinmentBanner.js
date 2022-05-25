import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({ date, setDate }) => {
    return (
        <div>
            <div style={{ background: bg, backgroundSize: 'cover' }} className="hero min-h-screen">
                <div className="flex justify-between lg:flex-row-reverse items-center">
                    <div className='p-8'>
                        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    </div>
                    <div className='mx-5 shadow-xl rounded-xl p-4'>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;