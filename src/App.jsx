import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <div>
       <Navbar />
      <BrowserRouter>
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
       </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;