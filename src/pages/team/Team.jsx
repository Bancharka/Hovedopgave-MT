import './Team.scss';
import ContentHeader from "../../components/contentheader/ContentHeader";
import Divider from "../../components/divider/Divider";
import Footer from "../../components/footer/Footer";
import TeamCard from "../../components/cards/team/TeamCard";

export default function Team() {
    return (
        <section className="team page-container">
            <ContentHeader
                tagline="Mød os allerede nu!"
                heading="Teamet"
                description="Få et indblik i teamet, så du er klar til din første dag hos Morningtrain!"
            />
            <Divider />
            <div className="team__cards">
                <TeamCard
                    image="/img/team/jakob.jpg"
                    altText={"Kollegaer"}
                    category="Frontend"
                    heading="Mød dine kollegaer"
                    description="Her kan du møde dine kommende kollegaer og se, hvad de arbejder med."
                />
            </div>
            <Footer />
        </section>
    )
}
