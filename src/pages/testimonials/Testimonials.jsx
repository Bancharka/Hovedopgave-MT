import './Testimonials.scss'
import ContentHeader from '../../components/contentheader/ContentHeader'
import Divider from '../../components/divider/Divider'
import TestimonialCard from '../../components/cards/testimonials/TestimonialCard'

export default function Testimonials() {
    return (
        <section className='testimonials page-container'>
            <ContentHeader
                tagline="Hvad siger tidligere praktikanter?"
                heading="Tidligere praktikanter"
                description="Lær af tidligere praktikanters erfaring, tanker og refleksioner. Kom hurtigere fra start med et forspring!" />
            <Divider />
            <div className='testimonials__cards'>
                <TestimonialCard
                    theme='orange'
                    image="/img/testimonials/clara.jpg"
                    altText="Frontendpraktikant Clara"
                    heading="Mit praktikforløb har givet mig selvtillid til mit fag"
                    description="Før jeg startede tvivlede jeg på mine evner, og om jeg var “god nok” til at starte som frontendpraktikant hos Morning train. Jeg havde ikke tidligere erfaringer med React, og kun begrænset Wordpress erfaring fra studiet. 
                                Men jeg oplevede at jeg lærte hurtigt, fik god personlig sparring og udviklede mig helt vildt. Nu har jeg en ny selvtillid og tro på, at jeg kan lære det jeg vil!"
                    author="Clara la Cour, frontendpraktikant" />
                <TestimonialCard
                    theme='purple'
                    image="/img/testimonials/clara.jpg"
                    altText="Frontendpraktikant Clara"
                    heading="Mit praktikforløb har givet mig konkrete erfaringer"
                    description="Før jeg begyndte, var jeg spændt på, hvordan det ville være at arbejde med rigtige projekter som backendpraktikant hos Morningtrain. Jeg havde arbejdet med Laravel før, men ikke i en professionel kontekst, og Morningmedley var helt nyt for mig.
                                Men jeg oplevede hurtigt, at min viden fra studiet kunne bruges i praksis. Jeg blev mødt med tillid og ansvar, og gennem tæt samarbejde med min(e) medpraktikant(er) har jeg lært enormt meget – både om tekniske løsninger og samarbejde i en professionel hverdag."
                    author="Morten Andersen, backendpraktikant" />
                <TestimonialCard
                    theme='green'
                    image="/img/testimonials/clara.jpg"
                    altText="Frontendpraktikant Clara"
                    heading="Mit praktikforløb har givet mig selvtillid til mit fag"
                    description="Før jeg startede tvivlede jeg på mine evner, og om jeg var “god nok” til at starte som frontendpraktikant hos Morning train. Jeg havde ikke tidligere erfaringer med React, og kun begrænset Wordpress erfaring fra studiet. 
                                Men jeg oplevede at jeg lærte hurtigt, fik god personlig sparring og udviklede mig helt vildt. Nu har jeg en ny selvtillid og tro på, at jeg kan lære det jeg vil!"
                    author="Clara la Cour, frontendpraktikant" />
                <TestimonialCard
                    theme='red'
                    image="/img/testimonials/clara.jpg"
                    altText="Frontendpraktikant Clara"
                    heading="Mit praktikforløb har givet mig selvtillid til mit fag"
                    description="Før jeg startede tvivlede jeg på mine evner, og om jeg var “god nok” til at starte som frontendpraktikant hos Morning train. Jeg havde ikke tidligere erfaringer med React, og kun begrænset Wordpress erfaring fra studiet. 
                                Men jeg oplevede at jeg lærte hurtigt, fik god personlig sparring og udviklede mig helt vildt. Nu har jeg en ny selvtillid og tro på, at jeg kan lære det jeg vil!"
                    author="Clara la Cour, frontendpraktikant" />
            </div>
        </section>
    )
}