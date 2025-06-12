import { useEffect, useState } from 'react';
import { useTheme } from '../../ThemeContext';
import './Sidebar.scss';

export default function Sidebar({ sidenavs = [] }) {
	const { darkMode } = useTheme();
	const [activeId, setActiveId] = useState(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{
				rootMargin: '-30% 0px -70% 0px',
				threshold: 0,
			}
		);

		const timeout = setTimeout(() => {
			sidenavs.forEach(({ id }) => {
				const el = document.getElementById(id);
				if (el) {
					observer.observe(el);
				} else {
					console.warn(`Element med id "${id}" blev ikke fundet`);
				}
			});
		}, 0);

		return () => {
			clearTimeout(timeout);
			observer.disconnect();
		};
	}, [sidenavs]);


	return (
		<div className="sidebar">
			<ul className="sidebar__ul">
				{sidenavs.map(({ id, label }) => (
					<li key={id}>
						<a
							href={`#${id}`}
							className={activeId === id ? 'active' : ''}
						>
							{label}
						</a>
					</li>
				))}
			</ul>
			<img
				className="sidebar__line"
				src="img/sidebar/short-line.svg"
				alt=""
			/>
		</div>
	);
}
