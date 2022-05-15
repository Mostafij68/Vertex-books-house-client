import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Spinner from '../Shared/Spinner/Spinner';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();


    if (user) {
        navigate('/')
    };

    const handleLogin = async event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
    };
    return (
        <div className='vc-container'>
            <div className="row pt-5">
                <div className="col-lg-3 col-md-2 col-sm-0"></div>
                <div className="col-lg-6 col-md-8 col-sm-12 restock text-center">
                    <h2 className='vc-text2 vc-h1 mb-4'>Login</h2>
                    <form onSubmit={handleLogin} className='restock-form'>
                        <input className='w-100' placeholder='Your email' type="email" name="email" />
                        <input className='w-100' placeholder='Password' type="password" name="password" />
                        {
                            error ? <p className='text-danger'>{error?.message}</p> : ''
                        }
                        {
                            loading ? <Spinner></Spinner> : ''
                        }
                        <div className="inventory-btn mt-5 mb-0">
                            <button type='submit'>Login</button>
                        </div>
                    </form>
                    <p className='text-muted my-2'>Haven't an account? <Link className='text-primary text-decoration-none' to={"/register"}>Register</Link>
                    </p>
                    <SocialLogin></SocialLogin>
                </div>
                <div className="col-lg-3 col-sm-0 col-md-2"></div>
            </div>
        </div>
    );
};

export default Login;