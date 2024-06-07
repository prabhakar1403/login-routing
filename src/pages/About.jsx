import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  }
  return (<>
  <div className='flex flex-rol bg-purple-200 h-screen'>
    <button className="fixed top-1 right-1 bg-purple-500 text-zinc-50 
          px-2 my-3 mx-3 py-1
          transition duration-5 transform hover:scale-110 rounded
          hover:text-white font-bold transform hover:underline" 
          onClick={handleClick}>
            Go back
    </button>
  </div>
 </>
  )
}

export default About