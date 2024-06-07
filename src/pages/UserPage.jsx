import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrencyInfo from '../CurrencyInfo.jsx'

const UserPage = () => {
  const [token, setToken] = useState(localStorage.getItem('login'));
  const navigate = useNavigate();
  const handleClick = () => {
    setToken(null);
    localStorage.removeItem('login');
  }

  useEffect(() => {
    if (token === null) {
      navigate('/');
    }
  }, [token, navigate]);

  return (
   <>
    <nav className='bg-gradient-to-b from-purple-400 to-purple-100 
      fixed w-full h-20'>
        <ul className='flex flex-row justify-between'>
            <li>
              <h1 className='text-purple-900 fixed top-1 left-1 mx-3 my-4 font-bold'>
                  Hello, {localStorage.getItem('name')}!
              </h1>
            </li>
            <li>
              <button className="fixed top-1 right-1 bg-purple-500 mx-3 my-3 px-3 py-1 
                text-zinc-50 transition duration-5 transform hover:scale-110
                rounded hover:text-white font-bold transform hover:underline" 
                onClick={handleClick}>
                  Logout
                </button>
            </li>
        </ul>
    </nav>
    <div className='bg-purple-100 flex flex-rol h-screen'>    
        <div className='flex flex-1 justify-center items-center'>
            <CurrencyInfo />
        </div> 
        <div className='flex flex-1 '>
         
        </div>
    </div>
    <div className='bg-purple-100'>
      hello
    </div>
   </>
  )
}

export default UserPage