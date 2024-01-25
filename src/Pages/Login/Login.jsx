import React from 'react'
import './Login.css'
import google from '../../Images/google.png'
import loginimg from '../../Images/login.png'
import { IoDocumentTextOutline } from "react-icons/io5";
import { MdPrivacyTip } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='login'>
                <div className='login1'>
                    <div className='login9'>
                        <img src={loginimg} alt="" />
                        <h2>Hi!</h2>
                    </div>

                    <div className='login10'>
                        <h3>Welcome !</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vulputate turpis elit, quis pellentesque ante bibendum nec. In posuere finibus risus auctor auctor. </p>
                    </div>

                    <div className='login11'>
                        <div className='login12'>
                            <MdPrivacyTip />
                            <p>Privacy Policy</p>
                        </div>
                        <div className='login12'>
                            <IoDocumentTextOutline />
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                </div>

                <div className='login2'>
                    <div className='login7'>
                        <p>Welcome Back !!</p>
                        <h5>Sign-in</h5>
                    </div>
                    <div className='login3'>
                        <button> <img src={google} alt="" />Sign-in with google</button>
                    </div>
                    <div className='login8'>
                        <span>or</span>
                    </div>
                    <div className='login4'>
                        <input type="email" name="" id="" placeholder='Email' />
                        <input type="password" name="" id="" placeholder='Password' />
                    </div>

                    <div className='login5' onClick={()=>navigate('/dashboard')}>
                        <button >Login</button>
                    </div>
                    <div className='login6'>
                        <span>Don’t have an account?</span>
                        <span>Signup Here</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login