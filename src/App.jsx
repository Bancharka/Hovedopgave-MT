import { Routes, Route, Link } from 'react-router-dom'
import Frontpage from './pages/departments/Frontpage'
import Practical from './pages/practical/Practical'


export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Departments</Link>
        <Link to="/Practical">Praktisk info</Link>
      </nav>
      <Routes>

        <Route path="/" element={<Frontpage />} />
        <Route path="/Practical" element={<Practical />} />

      </Routes>
    </div>
  )
} 