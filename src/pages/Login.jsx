import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [notRegisters, setNotRegisters] = useState(false);
  const names = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleClick = () => {
    if(localStorage.getItem('password') == null){
          alert('Register the user first..')
          setNotRegisters(true); 
    }else{
       if(names.current.value&&password.current.value){
                if(password.current.value === localStorage.getItem('password')){
                  localStorage.setItem('login', localStorage.getItem('email'));
                  alert('login success');
                  setLoginSuccess(true);
                }else{alert('Incorrect Password')}
       }else{alert('Fill out all the fields before submitting..')
       }
    }
  }

  useEffect(() => {
    if(loginSuccess){
      navigate('/userpage')
    }
    if(notRegisters){
      navigate('/signup')
    }
  }, [loginSuccess, notRegisters, navigate])

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-purple-100'>
      <h2 className='text-center py-9 text-2xl font-bold text-purple-600'>
      Login</h2>
        <input required className='text-center px-1 py-1 border my-1 text-slate-400' 
         type="text" placeholder='Enter your name' ref={names}/>
        <input className='text-center px-1 py-1 border my-1 text-slate-400' 
         type="password" placeholder='Enter your password' ref={password} />
      <button className="bg-purple-500 text-zinc-50 px-3 my-7
          transition duration-5 transform hover:scale-110 rounded
          hover:text-white font-bold transform hover:underline" 
          onClick={handleClick}
          >Submit
      </button>
  </div>
  )
}

export default Login