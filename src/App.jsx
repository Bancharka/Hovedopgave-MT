import { Routes, Route, Link } from 'react-router-dom'
import Frontpage from './pages/departments/Frontpage'

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Departments</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Frontpage />} />
      </Routes>
    </div>
  )
}