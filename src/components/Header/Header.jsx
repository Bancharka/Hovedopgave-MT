import { Link } from 'react-router-dom'
import "./HeaderStyle.scss";

export default function Header() {
	return (
		<>
			<section className="headerstyling">
				<img
					className="headerstyling__wave"
					src="\img\wave-header.svg"
					alt="Orange wave graphic"
				/>
				<div className="overnav">
					<a href="/">
						<img
							className="overnav__morningtrain"
							src="\img\logo-mt.svg"
							alt="Morningtrain logo"
						/>
					</a>
					<nav className="navigation">
        <Link to="/Practical">Praktisk info</Link>
				<Link to="/Practical">Kultur</Link>
				<Link to="/Practical">Ressourcer</Link>
				<Link to="/Practical">Teamet</Link>
				<Link to="/Practical">Testimonials</Link>
					</nav>
					<img
						className="overnav__moon"
						src="\img\icon _moon.svg"
						alt="Darkmode icon"
					/>
				</div>
			</section>
		</>
	);
}
