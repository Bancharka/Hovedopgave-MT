import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import BurgerMenu from "../burgermenu/Burgermenu";
import Bubbles from "../bubbles/Bubbles";
import { useTheme } from "../../ThemeContext";

export default function Header() {
	const { darkMode, toggleDarkMode } = useTheme();
	const location = useLocation();

	const headerbubbles = [
		{ top: "35%", left: "90%", size: "8px", delay: "0s" },
		{ top: "80%", left: "90%", size: "12px", delay: "1s" },
		{ top: "18%", left: "50%", size: "6px", delay: "2s" },
		{ top: "20%", left: "20%", size: "10px", delay: "3s" },
		{ top: "50%", left: "80%", size: "14px", delay: "4s" },
		{ top: "60%", left: "5%", size: "16px", delay: "4s" },
	];

	const isActive = (path) => location.pathname === path;

	return (
		<>
			<Bubbles aria-hidden="true" positions={headerbubbles} />
			<section className="headerstyling">
				<img
					className="headerstyling__wave"
					src={
						darkMode
							? "/img/header/darkmode-wave.svg"
							: "/img/header/wave-header.svg"
					}
					alt="Bølge grafik"
				/>
				<div className="overnav">
					<a href="/">
						<img
							className="overnav__morningtrain"
							src={
								darkMode
									? "/img/header/logo-mt-dark.svg"
									: "/img/header/logo-mt.svg"
							}
							alt="Morningtrain logo"
						/>
					</a>
					<nav className="navigation">
						<Link
							to="/Practical"
							className={isActive("/Practical") ? "active" : ""}
						>
							Praktisk info
						</Link>
						<Link
							to="/Culture"
							className={isActive("/Culture") ? "active" : ""}
						>
							Kultur
						</Link>
						<Link
							to="/Ressources"
							className={isActive("/Ressources") ? "active" : ""}
						>
							Ressourcer
						</Link>
						<Link
							to="/Team"
							className={isActive("/Team") ? "active" : ""}
						>
							Teamet
						</Link>
						<Link
							to="/Testimonials"
							className={
								isActive("/Testimonials") ? "active" : ""
							}
						>
							Tidligere praktikanter
						</Link>
					</nav>
					<div className="overnav__menu">
						<button
							className="overnav__button-reset"
							onClick={toggleDarkMode}
							aria-label="Slå mørkt tema til og fra"
						>
							<img
								className="overnav__moon"
								src={
									darkMode
										? "/img/header/icon _sun.svg"
										: "/img/header/icon _moon.svg"
								}
								aria-hidden="true"
							/>
						</button>

						<BurgerMenu />
					</div>
				</div>
			</section>
		</>
	);
}
