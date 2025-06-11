import './Culture.scss';
import TextImage from '../../components/textimage/TextImage';
import ContentHeader from '../../components/contentheader/ContentHeader';
import Divider from '../../components/divider/Divider';
import Footer from '../../components/footer/Footer';
import Orangebox from '../../components/orangebox/Orangebox';
import PageNav from '../../components/page-nav/PageNav';
import Blurryblop from '../../components/blurryblop/Blurryblop';
import Sidebar from '../../components/sidebar/Sidebar';

export default function Culture() {
    const sidenavs = [
        { id: "vision", label: "Vision" },
        { id: "mission", label: "Mission" },
        { id: "vaerdier", label: "Værdier" },
        { id: "historien", label: "Historien" },
        { id: "organisationen", label: "Organisationen" },
    ];

    return (
        <>
            <div className="nav-seperator">
                <Sidebar sidenavs={sidenavs} />
                <section className="page-container culture">
                    <div className="culture__desktopblop">
                        <Blurryblop
                            style={{
                                top: "100px",
                                left: "800px",
                                width: "500px",
                            }}
                        />
                        <Blurryblop
                            style={{
                                top: "850px",
                                left: "30px",
                                width: "600px",
                            }}
                        />
                        <Blurryblop
                            style={{
                                top: "2000px",
                                left: "600px",
                                width: "900px",
                            }}
                        />
                        <Blurryblop
                            style={{
                                top: "3500px",
                                left: "30px",
                                width: "900px",
                            }}
                        />
                    </div>
                    <div className="culture__cultureblop">
                        <Blurryblop style={{ top: "150px", left: "80px" }} />
                        <Blurryblop style={{ top: "1000px", left: "-40px" }} />
                        <Blurryblop style={{ top: "2080px", left: "80px" }} />
                        <Blurryblop style={{ top: "3700px", left: "80px" }} />
                    </div>
                    <ContentHeader
                        tagline="Stærk kultur – stærkt team."
                        heading="Kultur"
                        description="Sund fornuft, fleksible arbejdsrammer som rummer livet, autonome & ansvarlige arbejdsgange samt gode sociale tilbud. Det er Morningtrains opskrift på det gode arbejdsliv."
                    />
                    <Divider />
                    <TextImage
                        id="vision"
                        category="Vision"
                        heading="Vi bidrager til en verden, hvor godhed er sund forretning"
                        description="For os betyder godhed, at vi behandler hele værdikæden med fokus på bæredygtige langsigtede beslutninger. Mornings skal ikke vinde noget eller slå nogen - vi vil bare være her om 100 år."
                        contentsubheader="Kultur og arbejdsglæde i Mornings"
                        paragraph1="Hos Mornings tror vi på, at godhed og ordentlighed skaber stærke relationer og sund forretning. Når gode mennesker mødes, opstår meningsfulde samarbejder - det er sund fornuft. Vi ser godhed som et pejlemærke i alt, vi gør - særligt fordi vores største påvirkning er på arbejdsmarkedet. Derfor arbejder vi målrettet på at skabe fremtidens arbejdspladser med fokus på meningsfuldhed og arbejdsglæde. Vores mantra er: “Hvad nu hvis hver dag var en fest?”. Det handler om at skabe en sjov og udfordrende hverdag, der fremmer trivsel og udvikling."
                    />
                    <Orangebox
                        orangeheading="Konkrete tiltag for trivsel og balance:"
                        orangelist={[
                            "Coachinguddannelse til ledere, der styrker kollegers egen løsningsevne",
                            "Betalt sport i arbejdstiden og sociale klubber (Morningclubs)",
                            "Tydelige personprofiler for bedre samarbejde",
                            "Fleksible pauser (f.eks. spil, gåture, powernaps)",
                            "Selvstyring af arbejdsdag inden for aftalte rammer",
                        ]}
                    />
                    <Divider />

                    <TextImage
                        id="mission"
                        category="Mission"
                        heading="Værktøjet til at nå målet"
                        description="For at nå vores vision om at skabe fremtidens arbejdspladser, bruger vi vores mission som et konkret værktøj. Den fungerer som en opskrift med nøje udvalgte ingredienser - og rækkefølgen betyder noget."
                        contentsubheader="Missionen"
                        paragraph1="''Ved at fremme vores kultur baseret på selvledelse og relationer i perfekt balance med effektivitet og talentudvikling skaber vi effektfuld forretningsudvikling og ekstraordinære digitale løsninger, som giver værdi for vores kunder.''"
                    />
                    <Orangebox
                        orangeheading="Essensen i missionen"
                        orangelist={[
                            "Kulturen først: Forandringer starter i kulturen - det er vores vigtigste værktøj.",
                            "Selvledelse og relationer: Vi tror på frihed under ansvar og stærke relationer. Man er ''direktør ved eget skrivebord'', men aldrig alene.",
                            "Balance: Effektivitet og talentudvikling skal gå hånd i hånd. Vi investerer i udvikling, også når det koster på kort sigt.",
                            "Effekt og løsninger: Vi går op i, om vores løsninger reelt skaber værdi - både for kunden og os selv.",
                            "Kundens behov først: Vores succes måles i kundens udbytte, ikke interne KPI’er. Når kunden lykkes, gør vi det også.",
                        ]}
                    />
                    <Divider />
                    <TextImage
                        id="vaerdier"
                        category="Værdier"
                        heading="Værdierne - vores fælles kompas"
                        description="Værdierne hos Mornings er ikke blot ord på væggen - de er et aktivt værktøj, vi bruger, når tvivlen opstår. De hjælper os med at træffe beslutninger, der bringer os tættere på vores vision."
                        contentsubheader="Værdier er ikke evige - de er aktuelle"
                        paragraph1="Vi ser vores værdier som gæster i huset. De vælges til og genbesøges ca. hvert 4.-5. år, så de altid afspejler den retning og det fokus, som organisationen har brug for. Nogle værdier skiftes ud, fordi de nu lever naturligt i organisationen, andre fordi nye behov opstår."
                    />
                    <div className="culture__twoorange">
                        <Orangebox
                            orangeheading="Vi SATS'er på det, der betyder noget"
                            orangelist={[
                                "Samspil - Vi ved, hvornår vi skal spille solo og hvornår vi spiller i takt.",
                                "Ansvarlighed - Vi tager ejerskab og følger ting til dørs.",
                                "Tillid - Vi møder hinanden med nysgerrighed og gode intentioner.",
                                "Selvfornyelse - Vi udvikler os selv og hinanden med lyst og åbenhed.",
                            ]}
                        />
                        <Orangebox
                            orangeheading="Sådan lever vi værdierne i praksis"
                            orangelist={[
                                "Værdibarometermøder: Vi diskuterer konkrete hændelser og ser på, hvordan værdierne har været i spil.",
                                "Feedbackrutiner: Kærlig, konkret og konstruktiv feedback er en fælles forpligtelse.",
                                "Podcast 'Øster i øret': Åbenhed fra direktionslokalet - spørgsmål uden filter.",
                                "Luxafor-lamper: Signalerer, hvornår man kan forstyrre og hvornår man ikke kan.",
                                "Tjek-ind/-ud i møder: Vi deler, hvad vi bringer ind i rummet - og hvorfor.",
                                "Domæner og roller > titler: Ansvar og beslutninger følger kompetence, ikke hierarki.",
                            ]}
                        />
                    </div>
                    <Divider />
                    <TextImage
                        id="historien"
                        category="Historien"
                        heading="For at forstå hvem man er, skal man forstå, hvor man kommer fra"
                        description="Morningtrain blev født ud af en fiasko. Fire unge iværksættere forsøgte at sælge en softwareplatform til radiostationer - putting radio on the internet! Turen gik til USA med store ambitioner, men mødet med virkeligheden var hårdt. Det blev tydeligt, at succes ikke handler om produktet alene - men om menneskene og rejsen."
                        paragraph1="Den erkendelse blev fundamentet for Morningtrain: Vi ville bygge en virksomhed, der føltes som et hjem. Et sted, hvor man kan være sig selv, trives og vokse sammen med andre. Et sted med tryghed, tillid og fællesskab. Hos os er det ikke destinationen, men rejsen, der betyder noget. Det handler om at gøre tingene på den rigtige måde - sammen. Vi lykkes ikke, fordi vi jagter succes, men fordi vi skaber noget meningsfuldt. Sammen."
                        paragraph_bold2="Det er Morningtrain. Det er et sted, der føles som hjemme."
                    />
                    <Divider />
                    <TextImage
                        id="organisationen"
                        category="Organisationen"
                        heading="Strukturen der sætter strøm til den selvledte kollega"
                        description="I Morningtrain handler organisationsstruktur ikke om, hvem der bestemmer - men om, hvem der har ansvar. Når alle kender deres domæne, kan beslutninger træffes effektivt, uden unødvendigt bureaukrati."
                        paragraph_bold1="Den dygtigste ejer beslutningen"
                        paragraph1="Vi tror på et kompetencehierarki: Den fagligt stærkeste får mandatet - men ledelse findes i flere former: personaleledelse, faglig ledelse, lederledelse og forretningsdrivelse. Det skaber plads til, at forskellige mennesker leder på forskellige måder."
                        paragraph_bold2="Domæner: Klarhed i ansvar"
                        paragraph2="Et domæne er et afgrænset område, hvor en kollega har ansvar eller medansvar. Ansvar indebærer handlekraft og rådgivning. Medansvar betyder, at man skal høres. Det sikrer, at ledelse og faglighed følges ad - og at specialister fortsat driver kvalitet og udvikling."
                    />

                    <Orangebox
                        orangeheading="Roller og ansvar i praksis"
                        orangelist={[
                            "Ejerne sætter strategi og værdier",
                            "Direktionen omsætter strategi til retning",
                            "Ledelsen driver den daglige drift",
                            "Head of's har ansvar for fagområde og personale",
                            "Tech Leads driver den faglige retning",
                            "Specialister leverer løsninger og forbedringsforslag",
                        ]}
                    />
                    <PageNav />
                    <Footer />
                </section>
            </div>
        </>
    );
}
