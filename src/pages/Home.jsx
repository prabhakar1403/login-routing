import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='bg-violet-500 h-screen'>
    <h1 className="text-3xl text-center py-2 text-zinc-50 bg-slate-800">
      hello lets check login & Routing functionality</h1>
      <nav className="flex justify-between py-3 bg-transparent">
        <ul className="flex items-center px-5">
          <li>
          <button 
          onClick={() => navigate('/')}
          className="text-zinc-50 px-3 py-2
          transition duration-5 transform hover:scale-110  
          hover:text-white font-bold transform hover:underline">Home
          </button>
          </li>
          <li className="px-2 font-bold">
          <button 
          onClick={() => navigate('/contacts')}
          className="text-zinc-50 px-3 py-2
          transition duration-5 transform hover:scale-110  
          hover:text-white font-bold transform hover:underline">Contacts
          </button>
          </li>
          <li className="px-2 font-bold">
          <button 
          onClick={() => navigate('/about')}
          className="text-zinc-50 px-3 py-2
          transition duration-5 transform hover:scale-110  
          hover:text-white font-bold transform hover:underline">About
          </button>
          </li>
        </ul>
        <ul className="flex px-5"> 
          <li className="px-2"><button 
          onClick={() => navigate('/login')}
          className="rounded-xl bg-slate-800 text-zinc-50 px-3 py-2
          transition duration-5 transform hover:scale-110 hover:bg-slate-600 
          hover:text-white hover:shadow-lg">Login</button></li>
          <li className="px-2"><button 
          onClick={() => navigate('/signup')}
          className="rounded-xl bg-slate-800 text-zinc-50 px-3 py-2
          transition duration-5 transform hover:scale-110 hover:bg-slate-600 
          hover:text-white hover:shadow-lg">SignUp</button></li>
        </ul>
      </nav>
      </div>
    </>
  )
}

export default Home