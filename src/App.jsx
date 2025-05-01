import { Routes, Route, Link } from 'react-router-dom'
import Departments from './pages/departments/Departments'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Departments</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Departments />} />
      </Routes>
    </div>
  )
}