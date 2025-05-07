import "./HeaderStyle.scss";

export default function Header() {
	return (
		<>
			<section className="headerstyling">
				<img
					className="headerstyling__wave"
					src="src\assets\img\wave-header.svg"
					alt="Orange wave graphic"
				/>
				<div className="overnav">
					<a href="/">
						<img
							className="overnav__morningtrain"
							src="src\assets\img\logo-mt.svg"
							alt="Morningtrain logo"
						/>
					</a>
					<div className="navigation">
						<a href="">Marketing</a>
						<a href="">Frontend</a>
						<a href="">Design</a>
						<a href="">Backend</a>
					</div>
					<img
						className="overnav__moon"
						src="src\assets\img\icon _moon.svg"
						alt="Darkmode icon"
					/>
				</div>
			</section>
		</>
	);
}
