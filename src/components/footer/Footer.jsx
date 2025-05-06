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
            </footer>
        </>
    )
}