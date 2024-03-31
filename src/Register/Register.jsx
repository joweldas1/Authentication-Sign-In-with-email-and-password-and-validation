import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../Firebase/fireabase.config';
import { Link } from 'react-router-dom';
import { FaEye ,FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const [showError,setShowError]=useState('')
    const [success,setSuccess]=useState('')
    const [show,setShow]=useState(false)
    const handleToRegister=e=>{
        e.preventDefault()
        setSuccess('')
        setShowError('')
        const email=e.target.email.value;
        const password=e.target.password.value;
        const checked=e.target.terms.checked
        if(password.length<6){
            setShowError('password must be more than 6 character')
            return
        }else if(!/[A-Z]/.test(password)){
            setShowError('Password must be have an upper case')
            return;
        }
        else if(!checked){
            setShowError('please agree with terms and condition')
            return;
        }
        console.log(email,password,checked);


        createUserWithEmailAndPassword(auth,email,password)
        .then((result) => {
            console.log(result.user);            setSuccess('user create done')  

            sendEmailVerification(result.user)  
            .then((result) => {
                alert('check your mail and verify you email')
            }).catch((err) => {
                
            });
        }).catch((err) => {
            console.log(err.message);
            setShowError(err.message)
            
        });
    }
    return (
        <div className='h-[80vh] w-full flex justify-center items-center flex-col'>

            <div className='w-1/2 mx-auto'>
                <h1 className='text-center text-4xl my-5 font-semibold text-white'>Please Register</h1>
              <div className='w-3/4 mx-auto text-center '>
              <form onSubmit={handleToRegister} >
                    <input className='w-3/4 mb-3 text-white p-2 rounded-xl' type="email" name="email" placeholder='Enter your Email ' id="" required/> <br />

                   <div className='flex justify-center items-center relative'>
                   <input placeholder='Enter your password' className='w-3/4 mb-3 text-white p-2 rounded-xl'
                     type={show?"text":"password"} 
                    name="password"  id="" /> 
                     <span className='absolute right-20 -mt-3' onClick={()=>(setShow(!show))}>{show?<FaEyeSlash />:<FaEye/>}</span> <br />
                   </div>
                    <input type="checkbox" name="terms" id="terms" />
                    <label htmlFor="term">Please agree out terms & conditions   </label>
                    <input className='bg-blue-400 px-5 w-3/4 py-2 text-black rounded-lg font-semibold' type="submit" value="Register"required />
                </form>
                {
                    showError 
                    && 
                    <div className='text-red-600 font-semibold'>
                            <h2>{showError}</h2>
                    </div>
                }
                {
                    success &&
                    <div className='text-blue-600 font-semibold'>
                        {success}
                         <Link to='/login'><button>Sign In</button></Link>
                    </div> 
                }
              </div>
            </div>
            
        </div>
    );
};

export default Register;