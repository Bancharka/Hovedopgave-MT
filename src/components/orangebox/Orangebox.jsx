import "./OrangeboxStyle.scss"
import { useTheme } from "../../ThemeContext";

export default function Orangebox({ orangeheading, orangelist }) {
	
	const { darkMode } = useTheme();
	return (
		<section className={`orangebox ${darkMode ? "orangebox--dark" : ""}`}>
			<h3> {orangeheading} </h3>
			<ul className="orangebox__list">
				{orangelist.map((desc, index) => (
					<li key={index}>{desc}</li>
				))}
			</ul>
		</section>
	);
}