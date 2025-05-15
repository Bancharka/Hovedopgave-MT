import "TeamCard.scss";
import ContentH2 from "components/contenth2/ContentH2";

export default function TeamCard({ image, altText, category, heading, description }) {
    return (
        <div className="team-card">
            <img className="team-card__image" src={image} alt={altText} />
            <ContentH2
                category={category}
                heading={heading}
                description={description}
            />
        </div>
    );
}