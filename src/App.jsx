import { Routes, Route, Link } from 'react-router-dom'
import Departments from './pages/departments/Departments'
import Frontend from './pages/frontend/Frontend'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Departments</Link>
        <Link to="/Frontend">Frontend</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Departments />} />
        <Route path="/Frontend" element={<Frontend />} />
      </Routes>
    </div>
  )
}