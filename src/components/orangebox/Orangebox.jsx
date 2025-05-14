import "./OrangeboxStyle.scss"

export default function Orangebox({ orangeheading, orangelist }) {
	return (
		<section className="orangebox">
			<h3> {orangeheading} </h3>
			<ul className="orangebox__list">
				{orangelist.map((desc, index) => (
					<li key={index}>{desc}</li>
				))}
			</ul>
		</section>
	);
}