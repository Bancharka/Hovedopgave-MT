import { Routes, Route, Link } from 'react-router-dom'
import Departments from './pages/departments/Departments'
import Practical from './pages/practical/Practical'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Departments</Link>
        <Link to="/Practical">Praktisk info</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Departments />} />
        <Route path="/Practical" element={<Practical />} />
      </Routes>
    </div>
  )
}