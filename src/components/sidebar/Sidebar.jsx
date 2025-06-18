import { useTheme } from "../../ThemeContext";
import "./Sidebar.scss";

export default function Sidebar({ sidenavs = [] }) {
	const { darkMode } = useTheme();

	return (
		<nav aria-label="Sidebar navigation" className="sidebar">
			<ul className="sidebar__ul">
				{sidenavs.map(({ id, label }) => (
					<li key={id}>
						<a href={`#${id}`}>{label}</a>
					</li>
				))}
			</ul>
			<img
				aria-hidden="true"
				className="sidebar__line"
				src="img/sidebar/short-line.svg"
			/>
		</nav>
	);
}
