import "./frontpagestyle.scss";
import Divider from "../../components/divider/Divider";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { useTheme } from "../../ThemeContext";  // <-- import the hook

export default function Departments() {
  const { darkMode } = useTheme();  // <-- get darkMode state

  return (
    <>
      <section className="page-container frontpage">
        <div>
          <p>VELKOMMEN TIL</p>
          <img
            src={darkMode ? "/img/darkmode-onboardingtrain.svg" : "/img/onboardingtrain.svg"} // <-- conditional src
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
