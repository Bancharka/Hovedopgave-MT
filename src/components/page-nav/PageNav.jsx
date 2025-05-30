import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../ThemeContext";
import "./PageNav.scss";

export default function PageNav() {
	const { darkMode } = useTheme();
	const location = useLocation();
	const currentPath = location.pathname;

	const pageOrder = [
		{ path: "/", label: "Forside" },
		{ path: "/Practical", label: "Praktisk info" },
		{ path: "/Culture", label: "Kultur" },
		{ path: "/Ressources", label: "Ressourcer" },
		{ path: "/Team", label: "Teamet" },
		{ path: "/Testimonials", label: "Tidligere praktikanter" },
	];

	const currentIndex = pageOrder.findIndex(
		(page) => page.path === currentPath
	);
	const prevPage = pageOrder[currentIndex - 1];
	const nextPage = pageOrder[currentIndex + 1];

	return (
		<div className="page-nav page-container">
			{prevPage && (
				<Link to={prevPage.path} className="page-nav__prev">
					<img
						className="page-nav__arrow--left"
						src={
							darkMode
								? "/img/icons/arrow-left-darkmode.svg"
								: "/img/icons/arrow-left.svg"
						}
						alt="Arrow left"
					/>
					{prevPage.label || "Forside"}
				</Link>
			)}
			{nextPage && nextPage.label && (
				<Link to={nextPage.path} className="page-nav__next">
					{nextPage.label}
					<img
						className="page-nav__arrow--right"
						src={
							darkMode
								? "/img/icons/arrow-right-darkmode.svg"
								: "/img/icons/arrow-right.svg"
						}
						alt="Arrow right"
					/>
				</Link>
			)}
		</div>
	);
}
