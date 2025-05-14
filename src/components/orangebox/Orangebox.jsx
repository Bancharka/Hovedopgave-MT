import "./OrangeboxStyle.scss"

export default function Orangebox({ orangeheading, orangelist }) {
	return (
		<section className="orangebox">
			<h4 className="orangebox__heading">{orangeheading}</h4>
			<ul className="orangebox__list">
				{orangelist.map((desc, index) => (
					<li key={index}>{desc}</li>
				))}
			</ul>
		</section>
	);
}