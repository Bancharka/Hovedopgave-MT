import './FrontendStyle.scss'
import ContentHeader from '../../components/contentheader/ContentHeader'
import Bubbles from '../../components/bubbles/Bubbles'

export default function Frontend() {
    
    const headerbubbles = [
        { top: '10%', left: '15%', size: '8px', delay: '0s' },
        { top: '20%', left: '80%', size: '12px', delay: '1s' },
        { top: '35%', left: '50%', size: '6px', delay: '2s' },
        { top: '60%', left: '20%', size: '10px', delay: '3s' },
        { top: '70%', left: '70%', size: '14px', delay: '4s' },
        { top: '25%', left: '30%', size: '16px', delay: '2.5s' },
        { top: '50%', left: '85%', size: '18px', delay: '3.5s' },
        { top: '75%', left: '40%', size: '20px', delay: '1.8s' },
        { top: '15%', left: '60%', size: '22px', delay: '0.8s' },
        
        ];
    
    return (
        <>

        

        <section>
            <Bubbles positions={headerbubbles} /> 
            </section>
        <section className="frontend">
        <ContentHeader 
            tagline="Velkommen til"
            heading="Frontend Udvikling"
            description="Her er alt hvad du skal vide om frontend udvikling hos Morning Train. Du kan finde information om vores frontend udviklingsafdeling, vores projekter og vores teammedlemmer. Vi håber, at du vil finde det nyttigt og inspirerende."
        />
        </section>
        </>
    )
}

