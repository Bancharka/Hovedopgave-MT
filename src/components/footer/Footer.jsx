import './FooterStyle.scss';
import Divider from '../divider/Divider';

export default function Footer() {
    return (
        <>
            <footer className='footer'>
                <Divider />
                <div className="footer__container">
                    <p className='footer__text'>A part of Mornings:</p>
                    <a href="https://morningtrain.dk/" target="_blank" rel="noopener noreferrer" className='footer__linktext'>Morningtrain</a>
                    <a href="https://morningtrain.dk/" target="_blank" rel="noopener noreferrer" className='footer__linktext'>Morningbound</a>
                    <a href="https://morningtrain.dk/" target="_blank" rel="noopener noreferrer" className='footer__linktext'>Morningscore</a>
                    <a href="https://morningtrain.dk/" target="_blank" rel="noopener noreferrer" className='footer__linktext'>Morningtrack</a>
                    <a href="https://morningtrain.dk/" target="_blank" rel="noopener noreferrer" className='footer__linktext'>Morningassets</a>
                    <a href="https://morningtrain.dk/" target="_blank" rel="noopener noreferrer" className='footer__linktext'>DesignSub</a>
                </div>
                <Divider />
                <p className='footer__description'>@ 2025 Mornings ApS • Rugårdsvej 55A 1 tv, 5000 Odense C, Danmark • Tlf: +45 70 44 43 17 • CVR: 33362749</p>
            </footer>
        </>
    )
}