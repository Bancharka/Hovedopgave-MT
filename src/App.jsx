import { Routes, Route, Link } from 'react-router-dom'
import Frontpage from './pages/frontpage/Frontpage'
import Header from './components/header/Header'
import Practical from './pages/practical/Practical'
import Testimonials from './pages/testimonials/Testimonials'
import Culture from "./pages/culture/Culture"

export default function App() {
  return (
    <div>
      <Header />
      <Routes>

        <Route path="/" element={<Frontpage />} />
        <Route path="/" element={<Practical />} />
        <Route path="/Practical" element={<Practical />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Culture" element={<Culture />} />
      </Routes>
    </div>
  )
} 