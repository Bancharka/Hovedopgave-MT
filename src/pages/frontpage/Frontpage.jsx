import './Frontpage.scss';
import Divider from '../../components/divider/Divider';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import { useTheme } from '../../ThemeContext';
import Blurryblop from '../../components/blurryblop/Blurryblop';

export default function Departments() {
	const { darkMode } = useTheme();

	return (
		<>
			<section className="page-container frontpage">
				<div className="frontpage__desktopblop">
					<Blurryblop
						style={{ top: "200px", left: "1000px", width: "300px" }}
					/>
					<Blurryblop
						style={{ top: "500px", left: "400px", width: "500px" }}
					/>
				</div>
				<div className="frontpage__frontpageblop">
					<Blurryblop
						style={{ top: "10%", left: "-20%", width: "300px" }}
					/>
					<Blurryblop
						style={{ top: "70%", left: "40%", width: "200px" }}
					/>
				</div>
				<div className="frontpage__starttext">
					<p>VELKOMMEN TIL</p>
					<img
						className="frontpage__logo"
						src={
							darkMode
								? "/img/frontpage/darkmode-onboardingtrain.svg"
								: "/img/frontpage/onboardingtrain.svg"
						}
						alt="onboardingtrain logo"
					/>
				</div>

				<Divider />

				<div>
					<img
						className="frontpage__collage"
						src="/img/slack_header.jpg"
						alt=""
					/>
					<h3 className="frontpage__description">
						Velkommen til Morningtrains pre-onboarding-univers!
					</h3>
					<p>
						Her får du et samlet overblik over alt fra praktiske
						informationer og virksomhedskultur til
						læringsressourcer, dit kommende team og erfaringer fra
						tidligere praktikanter. Det hele er samlet, så du kan
						føle dig godt klædt på til din første dag.
					</p>
				</div>

				<Link to="/Practical" className="frontpage__start">
					START HER
				</Link>

				<Footer />
			</section>
		</>
	);
}
