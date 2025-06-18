import { Link } from "react-router-dom";
import { useState } from "react";
import "./Burgermenu.scss";
import { useTheme } from "../../ThemeContext";

export default function BurgerMenu() {
    const { darkMode } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="burgermenu">
            <button
                className="button-reset burgermenu__toggle"
                onClick={() => setIsOpen(true)}
            >
                &#9776;
            </button>       

            <div
                className={`burgermenu__overlay ${
                    isOpen ? "burgermenu__overlay--show" : ""
                }`}
            >
                <button
                    className="button-reset burgermenu__close"
                    onClick={() => setIsOpen(false)}
                >
                    &times;
                </button>
                <nav className="burgermenu__content">
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
                </nav>
                <img
                    className="burgermenu__wave"
                    src={
                        darkMode
                            ? "/img/header/burger_wave_dark.svg"
                            : "/img/header/burger_wave.svg"
                    }
                    alt="Orange bølgegrafik i forskellige lag"
                />
            </div>
        </div>
    );
}
