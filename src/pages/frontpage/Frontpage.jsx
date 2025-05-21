import "./Frontpage.scss";
import Divider from "../../components/divider/Divider";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { useTheme } from "../../ThemeContext";
import Blurryblop from '../../components/blurryblop/Blurryblop'

export default function Departments() {
  const { darkMode } = useTheme();

  return (
    <>
      <section className="page-container frontpage">
      <Blurryblop style={{ top: "100px", left: "800px", width: "500px" }} />
      <Blurryblop style={{ top: "250px", left: "50px", width: "700px" }} />
       <div className="frontpage__starttext">
        <p>VELKOMMEN TIL</p>
        <img
          className="frontpage__logo"
          src={darkMode ? "/img/frontpage/darkmode-onboardingtrain.svg" : "/img/frontpage/onboardingtrain.svg"}
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
