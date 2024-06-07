import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Contacts from './pages/Contacts.jsx'
import About from './pages/About.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import UserPage from './pages/UserPage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/userpage' element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
