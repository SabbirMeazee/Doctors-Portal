import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const navigate = useNavigate()
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [token] = useToken(user || gUser);

    if (loading || gLoading || updating) {
        return <Loading></Loading>;
    }
    let Error;
    if (error || gError || updateError) {
        Error = <p className='text-red-500'> {error?.message || gError?.message || updateError?.message}</p>
    }
    if (token) {
        navigate('/appointment');
    }
    const onSubmit = async data => {

        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // console.log(data)
    };
    
    return (
        <div className="flex items-center h-screen justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mx-auto font-bold">Sign Up</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                },
                            })}
                                type="name"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">

                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-lg">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Invalid Email'
                                }
                            })}
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">

                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-lg">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-lg">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Password should be atleast 6 character'
                                }
                            })}
                                type="password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-lg">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500 text-lg">{errors.password.message}</span>}
                            </label>
                        </div>
                        <input />
                        {Error}
                        <button type='submit' className="btn w-full btn-xs sm:btn-sm md:btn-md lg:btn-lg">Sign Up</button>
                    </form>
                    <p>Already Registered? <Link to={'/login'} className='text-primary'>Login here</Link></p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-lg">Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Register;