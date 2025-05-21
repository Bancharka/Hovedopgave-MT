import { Routes, Route, Link } from 'react-router-dom'
import ScrollToTop from './components/scrolltotop/ScrollToTop'
import Frontpage from './pages/frontpage/Frontpage'
import Header from './components/header/Header'
import Practical from './pages/practical/Practical'
import Testimonials from './pages/testimonials/Testimonials'
import Culture from "./pages/culture/Culture"
import Team from "./pages/team/Team"
import Ressources from './pages/ressources/Ressources' 
import { ThemeProvider } from './ThemeContext.jsx'

export default function App() {
  return (
    <div>
      <ScrollToTop />
    <ThemeProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/Practical" element={<Practical />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        <Route path="/Culture" element={<Culture />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Ressources" element={<Ressources />} />
      </Routes>
      </ThemeProvider>
      </div>
  );
} 