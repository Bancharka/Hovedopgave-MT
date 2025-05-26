import "./Team.scss";
import ContentHeader from "../../components/contentheader/ContentHeader";
import Divider from "../../components/divider/Divider";
import TextImage from "../../components/textimage/TextImage";
import Footer from "../../components/footer/Footer";
import PageNav from "../../components/page-nav/PageNav";
import Blurryblop from "../../components/blurryblop/Blurryblop";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Team() {
    const sidenavs = [
        { id: "frontend", label: "Frontend - Jakob" },
        { id: "design", label: "Design - Emelie" },
        { id: "backend", label: "Backend - Mathias" },
    ];
    return (
        <>
            <div className="nav-seperator">
                <Sidebar sidenavs={sidenavs} />
                <section className="team page-container">
                    <div className="team__desktopblop">
                        <Blurryblop
                            style={{
                                top: "100px",
                                left: "800px",
                                width: "700px",
                            }}
                        />
                        <Blurryblop style={{ top: "800px", left: "50px" }} />
                        <Blurryblop
                            style={{
                                top: "1700px",
                                left: "700px",
                                width: "500px",
                            }}
                        />
                    </div>
                    <div className="team__mobileblop">
                        <Blurryblop style={{ top: "200px", left: "20px" }} />
                        <Blurryblop
                            style={{
                                top: "1100px",
                                left: "30px",
                                height: "300px",
                            }}
                        />
                        <Blurryblop style={{ top: "2060px", left: "0px" }} />
                    </div>
                    <ContentHeader
                        tagline="Mød os allerede nu!"
                        heading="Teamet"
                        description="Få et indblik i teamet, så du er klar til din første dag hos Morningtrain!"
                    />
                    <Divider />
                    <TextImage
                        id="frontend"
                        category="Frontend"
                        heading="Jakob Skovvang - Frontendudvikler"
                        description="Jakob er en erfaren frontendudvikler med en baggrund som lærer, hvilket betyder, at han brænder for både at kommunikere klart og skabe struktur. Hos Morningtrain står han for planlægning, udførelse og evaluering af praktikforløb i udviklingsafdelingen, og han er altid klar til at hjælpe dig med at få det maksimale ud af din tid hos os."
                        paragraph_bold1="Jakob er især god til at hjælpe dig med:"
                        listItems={[
                            "At forstå og arbejde med frontendudvikling, herunder HTML, CSS og JavaScript",
                            "At lære, hvordan du navigerer i den tekniske del af udviklingsprojekter, samtidig med at du bevarer et fokus på brugeroplevelse og design",
                            "At støtte dig i at få feedback og udvikle dine færdigheder gennem både praktisk arbejde og refleksion",
                            "At finde løsninger og overkomme tekniske udfordringer, så du kan udvikle dig som udvikler",
                        ]}
                        paragraph2="Jakob ser frem til at støtte dig gennem dit praktikforløb og sikre, at du får en lærerig og spændende tid hos Morningtrain."
                        image="/img/team/jakob-light.png"
                        altText="Jakob Skovvang - Frontendudvikler"
                    />
                    <Divider />
                    <TextImage
                        id="design"
                        category="Design"
                        heading="Emelie Carén - Art director"
                        description="Emelie arbejder med et bredt spektrum af designprojekter - fra logoer og visuelle identiteter til grafik til sociale medier og websitedesign. Hvad der gør hendes arbejde spændende, er muligheden for at dykke ned i mange forskellige stilarter – fra stramme, professionelle hjemmesider til livlige og kreative designs, der appellerer til yngre målgrupper. "
                        paragraph_bold1="Emelie er især god til at hjælpe dig med:"
                        listItems={[
                            "At bruge designværktøjer som Figma, Illustrator, InDesign og Photoshop til at udvikle kreative og funktionelle løsninger",
                            "At udvikle visuelle identiteter, der afspejler et brand og engagerer målgruppen",
                            "At navigere i den kreative proces og lære at balancere idéer med struktur og praktisk anvendelighed",
                        ]}
                        paragraph2="Emelie glæder sig til at hjælpe dig med at udvikle dine designfærdigheder og skabe løsninger, der både ser fantastiske ud og giver mening."
                        image="/img/team/emelie-light.png"
                        imageFirst={true}
                        altText="Emelie Carén - Art director"
                    />
                    <Divider />
                    <TextImage
                        id="backend"
                        category="Backend"
                        heading="Mathias Munk - Backendudvikler"
                        description="Mathias arbejder som Lead Backendudvikler og har et dybt kendskab til WordPress og Laravel, samt generel programmering inden for S.O.L.I.D.-principperne. Han har også erfaring med moderne JS-infrastrukturer, bundling, React, CI/CD, serveropsætning og DNS. Hvad der gør hans arbejde spændende, er muligheden for at finde de rigtige, enkle og holdbare løsninger på tekniske udfordringer, der giver både kunder og udviklingsteam det bedste resultat."
                        paragraph_bold1="Mathias er især god til at hjælpe dig med:"
                        listItems={[
                            "At navigere i komplekse backend-udfordringer og finde enkle, skalerbare løsninger",
                            "At arbejde med serveropsætning, DNS og konfigurering for at sikre, at løsningerne kører stabilt og effektivt",
                            "At støtte dig i at få feedback og udvikle dine færdigheder gennem både praktisk arbejde og refleksion",
                            "At forstå og anvende moderne teknologier som Laravel, React og WordPress i praktiske udviklingsprojekter",
                        ]}
                        paragraph2="Mathias glæder sig til at hjælpe dig med at udvikle dine backend-færdigheder, finde de rette løsninger på tekniske udfordringer og lære at optimere processerne, så de både er effektive og holdbare."
                        image="/img/team/mathias-light.png"
                        altText="Mathias Munk - Backendudvikler"
                    />
                    <PageNav />
                    <Footer />
                </section>
            </div>
        </>
    );
}
