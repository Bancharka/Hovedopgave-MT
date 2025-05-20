
import { Link } from "react-router-dom";
import "./HeaderStyle.scss";
import BurgerMenu from "../burger-menu/Burger-menu";

export default function Header() {
 	return (
 		<>
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



