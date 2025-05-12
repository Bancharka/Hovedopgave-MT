import { Routes, Route, Link } from 'react-router-dom'
import Departments from './pages/departments/Departments'
import Practical from './pages/practical/Practical'
import Testimonials from './pages/testimonials/Testimonials'


export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Departments</Link>
        <Link to="/Practical">Praktisk info</Link>
        <Link to="/Testimonials">Tidligere praktikanter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Departments />} />
        <Route path="/Practical" element={<Practical />} />
        <Route path="/Testimonials" element={<Testimonials />} />
      </Routes>
    </div>
  )
}