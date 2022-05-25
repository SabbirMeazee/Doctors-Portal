import React from 'react';
import { format } from 'date-fns';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const BookingModal = ({ treatment, date, setTreatment }) => {
    const [user, loading, error] = useAuthState(auth);

    const { name, slots } = treatment

    const handleBooking = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value
        console.log(slot)
        // for close the modal
        setTreatment(null)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center py-3'>
                        <input disabled value={format(date, 'PP')} className="input input-bordered input-info w-full max-w-xs font-semibold" />
                        <input type="text" value={user?.displayName || ''} disabled name='name' placeholder="Your Name" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="email" disabled value={user?.email || ''} name='email' placeholder="Your email" className="input input-bordered input-info w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered input-info w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="submit" value={'Submit'} className=" btn btn-secondary input-bordered w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div >
    );
};

export default BookingModal;