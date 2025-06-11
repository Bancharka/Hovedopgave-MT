import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Burgermenu.scss';
import { useTheme } from '../../ThemeContext';

export default function BurgerMenu() {
    const { darkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="burgermenu">
            <span
                className="burgermenu__toggle"
                onClick={() => setIsOpen(true)}
            >
                &#9776;
            </span>

            <div
                className={`burgermenu__overlay ${
                    isOpen ? "burgermenu__overlay--show" : ""
                }`}
            >
                <a
                    className="burgermenu__close"
                    onClick={() => setIsOpen(false)}
                >
                    &times;
                </a>
                <div className="burgermenu__content">
                    <Link to="/Practical" onClick={handleLinkClick}>
                        Praktisk info
                    </Link>
                    <Link to="/Culture" onClick={handleLinkClick}>
                        Kultur
                    </Link>
                    <Link to="/Ressources" onClick={handleLinkClick}>
                        Ressourcer
                    </Link>
                    <Link to="/Team" onClick={handleLinkClick}>
                        Teamet
                    </Link>
                    <Link to="/Testimonials" onClick={handleLinkClick}>
                        Tidligere praktikanter
                    </Link>
                </div>
                <img
                    className="burgermenu__wave"
                    src={
                        darkMode
                            ? "/img/header/burger_wave_dark.svg"
                            : "/img/header/burger_wave.svg"
                    }
                    alt=""
                />
            </div>
        </div>
    );
}
