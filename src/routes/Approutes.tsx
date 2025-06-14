import { Routes,Route } from 'react-router-dom'
import Home from '../pages/home/home'
import FindADoctor from '../pages/FindADoctor/FindADoctor'
import AboutUs from '../pages/AboutUs/AboutUs'
import ClientZone from '../pages/ClientZone/ClientZone'
import Book from '../pages/Book/Book'
import Finish from '../pages/Finish/Finish'

function Approutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/find-a-doctor" element={<FindADoctor />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/client-zone" element={<ClientZone />} />
            <Route path="/book" element={<Book />} />
            <Route path="/Finish" element={<Finish />} />
        </Routes>
      
    </div>
  )
}

export default Approutes
