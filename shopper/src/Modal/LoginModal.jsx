import React from 'react';
import close_icon from '../images/close icon.png';
import { FaFacebook, FaGooglePlus, FaPinterest  } from "react-icons/fa";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from 'react-redux';
import { showLoginModal, showRegisterModal, forgotPassword, closeModal } from "../slices/LoginReducer";

export default function LoginModal() {

    const dispatch = useDispatch();
    const login = useSelector((state) => state. login.showLoginModal);
    const signup = useSelector((state) => state. login.showRegisterModal);
    const forgot_password = useSelector((state) => state. login.showForgotPassword);
    const reset_password = useSelector((state) => state. login.showResetPassword);

    function googlePlusLogin() {
        window.open("http://localhost:5000/google", "_self");
        // fetch("http://localhost:5000/google")
        // .then(data => console.log("data"))
        // .catch(err => console.log(err));
    }

  return (
    <div className='text-sm fixed top-0 bottom-0 right-0 left-0 z-10' id='LoginModal'>
        <div className='fixed top-0 bottom-0 right-0 left-0 bg-black opacity-50 z-10'> </div>
        {(login || signup) && 
            <div className='bg-white w-[502px] h-[616px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] p-5 rounded-[6px]'>
                <div className='float-right'>
                    <img src={close_icon} alt='close icon' className="w-4 h-4 cursor-pointer" onClick={() => dispatch(closeModal())}/>
                </div>
                <div className='text-center pt-12 pb-0 px-8'>
                    <div className='mb-5'>
                        <div className="font-bold text-[34px]">SH<span className="shopper-color text-[50px]">o</span>PPER</div>
                        <div className="text-center font-semibold text-xs mt-2">Smart Marketplace</div>
                    </div>
                    <form>
                        <div className='flex flex-col gap-y-5 mb-5'>
                            {signup && <input type='text' placeholder='Full Name' className='border-[#C6C6C5] border h-10 px-5'/>}
                            <input type='text' placeholder='Email Address' className='border-[#C6C6C5] border h-10 px-5'/>
                            <input type='text' placeholder='Password'  className='border-[#C6C6C5] border h-10  px-5'/>
                        </div>
                        {!signup && 
                            <div className='flex justify-between mb-8'>
                                <div><input type='checkbox' className='mr-1'/>Keep me Logged in</div>
                                <div className='cursor-pointer' onClick={() => dispatch(forgotPassword('forgot_password'))}>Forgot Password?</div>
                            </div>
                        }
                        <div>
                            <motion.button type='button' whileTap={{scale: 0.85}} className={`${signup ? 'w-[140px]' : ' w-24'} h-10 font-semibold rounded-md text-xs mr-5 shopper-bgcolor text-white`}> {(signup) ? 'Create Account' : 'Log in'}</motion.button>
                            {!signup && <motion.button  type='button' whileTap={{scale: 0.85}} className="h-10 font-semibold rounded-md text-xs mr-5 w-[140px] border-[#C8C8C8] border">Log in as a Guest</motion.button>}
                        </div>
                    </form>
                    <div className='mt-6 mb-6 text-[#878786]'>
                        or
                    </div>
                    <div>
                        <div className='mb-5'>{(signup) ? 'Sign-up with' : 'Sign in with'}</div>
                            <div className='flex items-center justify-center gap-x-6' >
                                <FaFacebook size = '30px' color = '#3B5998' className='cursor-pointer'/>
                                <FaGooglePlus size= '30px' color = '#DC4E41' onClick={googlePlusLogin} className='cursor-pointer'/>
                                <FaPinterest size= '30px' color = '#CB2027' className='cursor-pointer'/>
                            </div>
                    </div>
                    <div className='flex gap-x-5 justify-center mt-12 items-center'>
                        <div className='text-[#878786]'>{(signup) ? 'Already have an Account?' :  'Not have an Account?'}</div>
                        <motion.button whileTap={{scale: 0.85}} className="w-24 h-10 font-semibold rounded-md text-xs mr-5 shopper-color shopper-border" onClick={() => (signup) ? dispatch(showLoginModal()) : dispatch(showRegisterModal())}> {(signup) ? 'Login' : 'Register'} </motion.button>
                    </div>
                </div>
            </div> 
        }
        {
            (forgot_password || reset_password) &&
            <div className='bg-white w-[320px] h-[340px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] p-5 rounded-[6px]'>
                <div className='float-right'>
                    <img src={close_icon} alt='close icon' className="w-4 h-4 cursor-pointer" onClick={() => dispatch(closeModal())}/>
                </div>
                {forgot_password && <div className='mt-10 px-2'>Please enter the email address associated with your account. We'll promptly send you a link to reset your password.</div>}
                <form className='mt-10'>
                    <div className='flex flex-col gap-y-5 mb-5 px-2'>
                        {forgot_password && <input type='text' placeholder='Email Address' className='border-[#C6C6C5] border h-10 px-5'/>}
                        {reset_password && <input type='text' placeholder='New password' className='border-[#C6C6C5] border h-10 px-5 mt-5'/>}
                        {reset_password && <input type='text' placeholder='Confirm password'  className='border-[#C6C6C5] border h-10  px-5'/>}
                    </div>
                    <div className='text-center mt-10'>
                        <motion.button type='button' whileTap={{scale: 0.85}} className="w-[140px] h-10 font-semibold rounded-md text-xs shopper-bgcolor text-white" onClick={() => (forgot_password) ? dispatch(forgotPassword('reset_password')) : null }> {(forgot_password) ? 'Send reset link' : 'Reset password'}</motion.button>
                    </div>
                </form>
            </div>
        }
    </div>
  )
}


