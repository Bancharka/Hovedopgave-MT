import "./TestimonialCard.scss";

export default function TestimonialCard({ image, altText, heading, description, author, theme = "default" }) {
    return (
        <div className={`testimonial-card theme-${theme}`}>
            <img className="testimonial-card__image" src={image} alt={altText} />
            <div className="testimonial-card__content">
                <h3 className="testimonial-card__heading">{heading}</h3>
                <p className="testimonial-card__description">{description}</p>
                <p className="testimonial-card__author">{author}</p>
            </div>
        </div>
    );
}
