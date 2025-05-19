import { Link } from "react-router-dom";
import { useState } from "react";
import "./Burger-menu.scss";

export default function BurgerMenu() {
	const [isOpen, setIsOpen] = useState(false);

	const handleLinkClick = () => {
		setIsOpen(false); // Close menu when a link is clicked
	};

	return (
		<div className="burger-menu">
			{/* Open Button */}
			<span
				className="burger-menu__toggle"
				onClick={() => setIsOpen(true)}
			>
				&#9776;
			</span>

			{/* Overlay Menu */}
			<div
				className={`burger-menu__overlay ${
					isOpen ? "burger-menu__overlay--show" : ""
				}`}
			>
				<a
					className="burger-menu__close"
					onClick={() => setIsOpen(false)}
				>
					&times;
				</a>
				<div className="burger-menu__content">
					<Link to="/Practical" onClick={handleLinkClick}>
						Praktisk info
					</Link>
					<Link to="/Culture" onClick={handleLinkClick}>
						Kultur
					</Link>
					<Link to="/Practical" onClick={handleLinkClick}>
						Ressourcer
					</Link>
					<Link to="/Practical" onClick={handleLinkClick}>
						Teamet
					</Link>
					<Link to="/Testimonials" onClick={handleLinkClick}>
						Tidligere praktikanter
					</Link>
				</div>
				<img
					className="burger-menu__wave"
					src="/img/header/burger_wave.svg"
					alt=""
				/>
			</div>
		</div>
	);
}
