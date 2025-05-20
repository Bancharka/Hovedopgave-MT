import { Link } from "react-router-dom";
import "./HeaderStyle.scss";
import BurgerMenu from "../burger-menu/Burger-menu";
import Bubbles from "../bubbles/Bubbles";

export default function Header() {
	const headerbubbles = [
		{ top: "35%", left: "90%", size: "8px", delay: "0s" },
		{ top: "80%", left: "90%", size: "12px", delay: "1s" },
		{ top: "18%", left: "50%", size: "6px", delay: "2s" },
		{ top: "20%", left: "20%", size: "10px", delay: "3s" },
		{ top: "50%", left: "80%", size: "14px", delay: "4s" },
		{ top: "60%", left: "5%", size: "16px", delay: "4s" },
	];

	return (
		<>
			<Bubbles positions={headerbubbles} />
			<section className="headerstyling">
				<img
					className="headerstyling__wave"
					src="/img/header/wave-header.svg"
					alt="Orange wave graphic"
				/>
				<div className="overnav">
					<a href="/">
						<img
							className="overnav__morningtrain"
							src="/img/header/logo-mt.svg"
							alt="Morningtrain logo"
						/>
					</a>
					<nav className="navigation">
						<Link to="/Practical">Praktisk info</Link>
						<Link to="/Culture">Kultur</Link>
						<Link to="/Practical">Ressourcer</Link>
						<Link to="/Practical">Teamet</Link>
						<Link to="/Testimonials">Tidligere praktikanter</Link>
					</nav>
					<div className="overnav__menu">
						<img
							className="overnav__moon"
							src="/img/header/icon _moon.svg"
							alt="Darkmode icon"
						/>
						<BurgerMenu />
					</div>
				</div>
			</section>
		</>
	);
}
