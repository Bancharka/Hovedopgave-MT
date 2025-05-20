import "./BubblesStyle.scss";

export default function Bubbles({ positions }) {
	return (
		<div className="floating-circles">
			{positions.map((pos, i) => (
				<span
					key={i}
					className="circle"
					style={{
						top: pos.top,
						left: pos.left,
						width: pos.size,
						height: pos.size,
						animationDelay: pos.delay,
					}}
				/>
			))}
		</div>
	);
}
