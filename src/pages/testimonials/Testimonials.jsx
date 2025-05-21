import './Testimonials.scss'
import ContentHeader from '../../components/contentheader/ContentHeader'
import Divider from '../../components/divider/Divider'
import TestimonialCard from '../../components/cards/testimonials/TestimonialCard'
import PageNav from '../../components/page-nav/PageNav'
import Footer from '../../components/footer/Footer'

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
                    image="/img/testimonials/morten.png"
                    altText="Backenedpraktikant Morten"
                    heading="Mit praktikforløb har givet mig konkrete erfaringer"
                    description="Før jeg begyndte, var jeg spændt på, hvordan det ville være at arbejde med rigtige projekter som backendpraktikant hos Morningtrain. Jeg havde arbejdet med Laravel før, men ikke i en professionel kontekst, og Morningmedley var helt nyt for mig.
                                Men jeg oplevede hurtigt, at min viden fra studiet kunne bruges i praksis. Jeg blev mødt med tillid og ansvar, og gennem tæt samarbejde med min(e) medpraktikant(er) har jeg lært enormt meget – både om tekniske løsninger og samarbejde i en professionel hverdag."
                    author="Morten Andersen, backendpraktikant" />
                <TestimonialCard
                    theme='green'
                    image="/img/testimonials/vibe.jpg"
                    altText="Designpraktikant Vibe"
                    heading="Nu tror jeg på mig selv"
                    description="Allerede før vi skulle søge praktik på studiet, var jeg nervøs for om jeg ville have noget at tilbyde en virksomhed til den tid. Jeg vidste at jeg min personlighed kunne skaffe mig en praktikplads, men jeg super usikker på om mine faglige færdigheder kunne følge med også. 
                                Hos Morningtrain lærte jeg hurtigt, at det kunne de godt. Jeg fik enormt meget selvtillid igennem min praktik, og jeg fik en helt ny tro på mig selv og mit arbejde."
                    author="Vibe Thyra, designpraktikant" />
                <TestimonialCard
                    theme='red'
                    image="/img/testimonials/soren.jpg"
                    altText="Frontendpraktikant Søren"
                    heading="Fra imposter-syndrom til selvtillid"
                    description="Min praktik hos Morningtrain startede med imposter-syndrom, men det blev hurtigt afløst af selvtillid takket være god sparring og vejledning fra kollegaerne omkring mig. Jeg lærte at stå på egne ben og forstod, at man ikke kan alt fra starten. Det vigtigste, jeg tager med mig, er evnen til at lære at lære – et uundværligt værktøj i min karriere som udvikler."
                    author="Søren Kloster, frontendpraktikant" />
            </div>
            <PageNav />
            <Footer />
        </section>
    )
}