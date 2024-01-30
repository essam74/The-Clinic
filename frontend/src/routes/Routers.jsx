import {Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import Contact from '../pages/Contact.jsx'
import Login from '../pages/Login.jsx'
import Services from '../pages/Services.jsx'
import Signup from '../pages/Signup.jsx'
import Doctors from '../pages/Doctors/Doctors.jsx'
import DoctorsDetails from '../pages/Doctors/DoctorsDetails.jsx'

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/services" element={<Services/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/doctors/:id" element={<DoctorsDetails/>} />
    </Routes>
  )
}
