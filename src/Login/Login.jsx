import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/fireabase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [login,setLogin]=useState('')
    const [error,setError]=useState('')
    const emailRef=useRef(null)
const handleOnClick=(e)=>{
    e.preventDefault()
    setLogin('')
    setError('')
    const email=e.target.email.value
    const password=e.target.password.value;

    signInWithEmailAndPassword(auth,email,password)
    .then((result) => {
    console.log(result.user); 
        if(result.user.emailVerified){
            setLogin("Successfully login done")
        }
    }).catch((err) => {
        console.log(err.user);
        setError(err.message)
    });
    console.log(email,password);
}
const handleReset=()=>{
    const email=emailRef.current.value;
    var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;


    if(!email){
        setError('please enter email address    ')
        return
    }
    else if(!emailRegex.test(email)){
        setError('please provide valid email')
        return
    }
    sendPasswordResetEmail(auth,email)
    .then((result) => {
        setLogin(`Mail send to you email ${email} ,please check and reset your password`)
        
    }).catch((err) => {
        setError(err.message)
    });
    console.log(email);

}

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleOnClick}>
        <div className="form-control">
          <label className="label">
            <span className="label-text" >Email</span>
          </label>
          <input type="email" ref={emailRef} placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#"  onClick={handleReset} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
           
      </form>
      {  login && 
                <div>
                    <p className="text-green-600 text-4xl">{login}</p>
                </div>
            }
            {
                error && <div> <p>{error}</p> </div>
            }

            <div>
                <p>
                    do not have an account,please <Link to='/register'>Register</Link>
                </p>
            </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;