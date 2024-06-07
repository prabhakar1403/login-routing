import React, {useState, useEffect} from 'react'
import Contacts from './pages/Contacts.jsx'
import About from './pages/About.jsx'

const CurrencyInfo = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleClick = (e) => {
      setSelectedOption(e.target.value);
    };

  return (
    <>
        <form>
            <label>
                <input type="radio" 
                name='option'
                value="backDated"
                onClick={handleClick}
                 />
                Backdated
            </label>
            <label>
                <input type="radio"
                name='option'
                value="currentDated"
                onClick={handleClick}
                />
                Current Dated
            </label>
        </form>
        {selectedOption === 'backDated' && <About />}
      {selectedOption === 'currentDated' && <Contacts />}
    </>
  )
}

export default CurrencyInfo