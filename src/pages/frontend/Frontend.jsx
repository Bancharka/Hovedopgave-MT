import './FrontendStyle.scss'
import ContentHeader from '../../components/contentheader/ContentHeader'
import Bubbles from '../../components/bubbles/Bubbles'
import Header from '../../components/Header/Header.jsx'

export default function Frontend() {
    
   
    
    return (
        <>

        

        <section>
            <Header />
            
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




