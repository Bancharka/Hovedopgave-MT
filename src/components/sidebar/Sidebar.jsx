import { useTheme } from "../../ThemeContext";
import "./Sidebar.scss";

export default function Sidebar({ sidenavs = [] }) {
	const { darkMode } = useTheme();
	

	return (
		<div className="sidebar">
			<ul className="sidebar__ul">
				{sidenavs.map(({ id, label }) => (
					<li key={id}>
						<a href={`#${id}`}>{label}</a>
					</li>
				))}
			</ul>
		</div>
	);
}
