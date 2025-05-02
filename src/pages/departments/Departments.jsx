import './Departmentsstyle.scss';

export default function Departments() {
  return (
    <section className="departments">
      <img className="departments__wave departments__wave--left" src="src/assets/img/wave-left.svg" alt="wave left" />
      <img className="departments__wave departments__wave--right" src="src/assets/img/wave-right.svg" alt="wave right" />


      <div className="departments__content">
        <p>VELKOMMEN TIL</p>
        <img src="src/assets/img/logo-mt.svg" alt="morningtrain logo" />

        <div className="departments__pillars">
          <div className="pillar">
            <img src="src/assets/img/betina-pill.png" alt="Betina" />
            <a href="#">Marketing</a>
          </div>
          <div className="pillar">
            <img src="src/assets/img/jakob-pill.png" alt="Jakob" />
            <a href="/Frontend.jsx">Frontend</a>
          </div>
          <div className="pillar">
            <img src="src/assets/img/emelie-pill.png" alt="Emelie" />
            <a href="#">Design</a>
          </div>
          <div className="pillar">
            <img src="src/assets/img/mathias-pill.png" alt="Mathias" />
            <a href="#">Backend</a>
          </div>
        </div>
      </div>
    </section>
  );
}
