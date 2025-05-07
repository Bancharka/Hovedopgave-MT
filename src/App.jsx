import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/header/Header'
import Practical from './pages/practical/Practical'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Practical />} />
        <Route path="/Practical" element={<Practical />} />
      </Routes>
    </div>
  )
}