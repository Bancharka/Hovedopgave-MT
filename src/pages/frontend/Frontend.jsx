import './FrontendStyle.scss'
import ContentHeader from '../../components/contentheader/ContentHeader'

export default function Frontend() {
    return (
        <>
        <section className="frontend page-container">
        <ContentHeader 
            tagline="Velkommen til"
            heading="Frontend Udvikling"
            description="Her er alt hvad du skal vide om frontend udvikling hos Morning Train. Du kan finde information om vores frontend udviklingsafdeling, vores projekter og vores teammedlemmer. Vi håber, at du vil finde det nyttigt og inspirerende."
        />
        </section>
        </>
    )
}

