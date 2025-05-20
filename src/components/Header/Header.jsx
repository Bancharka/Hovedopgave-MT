// src/components/Header/Header.jsx
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeContext.jsx';
import './HeaderStyle.scss';

export default function Header() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <section className="headerstyling">
      <img
        className="headerstyling__wave"
        src={darkMode ? '/img/darkmode-wave.svg' : '/img/wave-header.svg'}
        alt="Wave graphic"
      />
      <div className="overnav">
        <a href="/">
          <img
            className="overnav__morningtrain"
            src={darkMode ? '/img/logo-mt-dark.svg' : '/img/logo-mt.svg'}
            alt="Morningtrain logo"
          />
        </a>
        <nav className="navigation">
          <Link to="/Practical">Praktisk info</Link>
          <Link to="/Culture">Kultur</Link>
          <Link to="/Ressourcer">Ressourcer</Link>
          <Link to="/Teamet">Teamet</Link>
          <Link to="/Tidligere Praktikanter">Tidligere praktikanter</Link>
        </nav>
        <img
          className="overnav__moon"
          src={darkMode ? '/img/icon _sun.svg' : '/img/icon _moon.svg'}
          alt="Toggle dark mode"
          onClick={toggleDarkMode}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </section>
  );
}
