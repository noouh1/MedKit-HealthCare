import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home/Home.tsx'
import FindDoctor from '../pages/findDoctor/FindDoctor.tsx'
import AboutUs from '../pages/aboutUs/AboutUs'
import Book from '../pages/book/Book'
import Finish from '../pages/finish/Finish'
import Login from '../pages/login/Login.tsx'
import SignUpAsDoctor from '../pages/signUpAsDoctor/signUpAsDoctor.tsx'

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/find-a-doctor" element={<FindDoctor />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/book" element={<Book />} />
            <Route path="/signUpAsDoctor" element={<SignUpAsDoctor />} />
            <Route path="/Finish" element={<Finish />} />
        </Routes>
      
    </div>
  )
}

export default AppRoutes
