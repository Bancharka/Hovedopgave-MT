import { Routes, Route, Link } from 'react-router-dom'
import Departments from './pages/departments/Departments'
import Practical from './pages/practical/Practical'
import Culture from "./pages/culture/Culture"

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Departments</Link>
        <Link to="/Practical">Praktisk info</Link>
        <Link to="/Culture">Kultur</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Departments />} />
        <Route path="/Practical" element={<Practical />} />
        <Route path="/Culture" element={<Culture />} />
      </Routes>
    </div>
  )
}