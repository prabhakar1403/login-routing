import React, { useRef, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const names = useRef();
  const dob = useRef();
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const navigate = useNavigate();

  const [signupSuccess, setSignupSuccess] = useState(false);
  useEffect(() => {
    if (signupSuccess) {
      navigate('/');
    }
  }, [signupSuccess, navigate]);
  {/*const [birthdateColor, setBirthdateColor] = useState('text-slate-400');

  const handleBirthdateChange = (event) => {
    console.log(event.target.value)
    if (event.target.value.trim() !== '') {
      setBirthdateColor('text-black');
    } else {
      setBirthdateColor('text-slate-400');
    }
  };*/}

  const handleClick = () => {
    if(names.current.value&&email.current.value&&dob.current.value&&
      password1.current.value&&password2.current.value){
      if(password1.current.value === password2.current.value){
            localStorage.setItem('name', names.current.value);
            localStorage.setItem('email', email.current.value);
            localStorage.setItem('dob', dob.current.value);
            localStorage.setItem('password', password1.current.value);
            alert('Account created successfully!!');
            setSignupSuccess(true);
          }
          else{alert('Passwords are not matching')}
    }else{alert('Fill out all the fields before submitting')}
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-purple-100'>
      <h2 className='text-center py-9 text-2xl font-bold text-purple-600'>
        Signup</h2>
      <input required className='text-center px-1 py-1 border my-1 text-slate-400' 
      type="text" placeholder='Enter your name' id='username' 
      ref={names}/>
      <input className='text-center px-1 py-1 border my-1 text-slate-400' 
      type="email" placeholder='Enter your email' ref={email} />
      <input className='text-center text-slate-400 px-6 py-1 border my-1 `${birthdateColor}`' 
      type="date" placeholder='Enter your Birthdate' ref={dob}/>
      <input className='text-center px-1 py-1 border my-1 text-slate-400' 
      type="password" placeholder='Enter your password' ref={password1} />
      <input className='text-center px-1 py-1 border my-1 text-slate-400' 
      type="password" placeholder='Confirm your password' ref={password2} />
      <button className="bg-purple-500 text-zinc-50 px-3 my-7
          transition duration-5 transform hover:scale-110 rounded
          hover:text-white font-bold transform hover:underline"
          onClick={handleClick}>Submit
      </button>
  </div>
  )
}

export default Signup