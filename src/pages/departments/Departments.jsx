import './Departmentsstyle.scss'

export default function Departments() {
  return (
    <>
      <section className="departments">

        <div>
          <p className>VELKOMMEN TIL</p>
          <img src="src\assets\img\logo-mt.svg" alt="morningtrain logo" />
        </div>

        <div>

          <div>
            <img src="src\assets\img\betina-pill.png" alt="" />
            <a href="">Marketing</a>
          </div>

          <div>
            <img src="src\assets\img\jakob-pill.png" alt="" />
            <a href="/Frontend.jsx">Frontend</a>
          </div>

          <div>
            <img src="src\assets\img\emelie-pill.png" alt="" />
            <a href="">Design</a>
          </div>


          <div>
            <img src="src\assets\img\mathias-pill.png" alt="" />
            <a href="">Backend</a>
          </div>

        <img className='departments__wave--left' src="src\assets\img\waves.svg" alt="wave graphic" />
        <img className='departments__wave--right' src="src\assets\img\waves.svg" alt="" />
        </div>
      </section>
    </>
  )
}
