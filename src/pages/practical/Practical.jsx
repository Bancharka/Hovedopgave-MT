import ContentHeader from "../../components/contentheader/ContentHeader";
import Divider from "../../components/divider/Divider";
import Footer from "../../components/footer/Footer";
import TextImage from "../../components/textimage/TextImage";
import PageNav from "../../components/page-nav/PageNav";
import Blurryblop from "../../components/blurryblop/Blurryblop";
import "./Practical.scss";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Practical() {
    const sidenavs = [
        { id: "modetider", label: "Mødetider" },
        { id: "mad", label: "Mad" },
        { id: "parkering", label: "Parkering" },
        { id: "dresscode", label: "Dresscode" },
        { id: "teknik", label: "Teknik" },
        { id: "morningEvents", label: "MorningEvents" },
    ];

    return (
        <>
            <div className="nav-seperator">
                <Sidebar sidenavs={sidenavs} />
                <section className="page-container practical">
                    <div className="practical__desktopblop">
                        <Blurryblop
                            style={{ top: "0%", left: "0%", width: "900px" }}
                        />
                        <Blurryblop
                            style={{ top: "160%", left: "30%", width: "700px" }}
                        />
                        <Blurryblop
                            style={{ top: "230%", left: "0%", width: "700px" }}
                        />
                    </div>
                    <div className="practical__mobileblop">
                        <Blurryblop style={{ top: "10%", left: "-20%" }} />
                        <Blurryblop style={{ top: "150%", left: "20%" }} />
                        <Blurryblop style={{ top: "450%", left: "25%" }} />
                    </div>
                    <ContentHeader
                        tagline="Så er du klar!"
                        heading="Praktisk info"
                        description="Her er de praktiske informationer, du skal bruge i forbindelse med dit forløb hos Morning Train."
                    />
                    <Divider />
                    <TextImage
                        id="modetider"
                        heading="Mødetider"
                        description="Vi er ret fleksible når det kommer til arbejdstid, men vi forventer at du kan møde og være på kontoret mellem 09:00 og 15:00 fra mandag til fredag."
                        image="/img/practical/time.png"
                        altText={"Ur"}
                    />
                    <Divider />
                    <TextImage
                        id="mad"
                        heading="Mad"
                        description="Vi har et lille cafeterie homie, og vi får super lækker mad til frokost, så medmindre du godt kan lide tørre rugbrødsmadder, så synes vi at du skal spise frokost med os andre, det koster gratis som praktikant!"
                        image="/img/practical/food.png"
                        imageFirst={true}
                        altText={"Mad"}
                    />
                    <Divider />
                    <TextImage
                        id="parkering"
                        heading="Parkering"
                        description="Har du bil når du er på SU ? Sejt nok! Vi har en parkeringsplads du kan holde på gratis, du skal bare registrere bilen når du møder om morgenen. Hvis du kommer flyvende på din cykel, så har vi også et halvtag med cykelstativ hvor du kan stille cyklen, men der er kamp om pladserne!"
                        image="/img/practical/parking.png"
                        altText={"Kort over parkeringsplads"}
                    />
                    <Divider />
                    <TextImage
                        id="dresscode"
                        heading="Dresscode"
                        description="Hos os går vi ikke op i om du har skjorte på, på arbejde. Du må gerne komme i din metallica t-shirt og jeans."
                        image="/img/practical/colleages.jpg"
                        imageFirst={true}
                        altText={"Kollegaer i afslappet tøj"}
                    />
                    <Divider />
                    <TextImage
                        id="teknik"
                        heading="Teknik"
                        description="Når du starter din praktik tid hos os, kommer du til at bruge din egen computer til at arbejde på. Har du ikke en computer du kan tage med på arbejde, så kan du låne en af os."
                        image="/img/practical/case.png"
                        altText={"Laptop"}
                    />
                    <Divider />
                    <TextImage
                        id="morningEvents"
                        heading="MorningEvents"
                        description="Hvad nu hvis man altid havde en form for fest? Som medarbejder i Morningtrain står du først i køen til sjove oplevelser med dine kollegaer. MorningEvents er en side, hvor du kan tilmelde dig til forskellige events og ugentlige sports-aktiviteter. Du kan også oprette din egen gruppe hvis du går med en fed idé, andre fra teamet kunne få glæde af. For at se og tilmelde dig events når du starter, kan du gå ind på:"
                        image="/img/practical/event.png"
                        links={[
                            {
                                text: "Morningtrain Events",
                                href: "https://morningevents.dk/",
                            },
                        ]}
                        imageFirst={true}
                        altText={"Gokart event"}
                    />
                    <PageNav />
                    <Footer />
                </section>
            </div>
        </>
    );
}
