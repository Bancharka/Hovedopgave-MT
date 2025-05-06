import './PractialStyle.scss'
import ContentHeader from '../../components/contentheader/ContentHeader'
import Divider from '../../components/divider/Divider'
import Footer from '../../components/footer/Footer'

export default function Practical() {
    return (
        <>
        <section className="page-container">
        <ContentHeader 
            tagline="Velkommen til"
            heading="Praktisk info"
            description="Her er de praktiske informationer, du skal bruge i forbindelse med dit forløb hos Morning Train."
        />
        <Divider />
        <Footer />
        </section>
        </>
    )
}

