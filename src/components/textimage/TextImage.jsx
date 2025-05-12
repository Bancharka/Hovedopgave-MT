import './TextImageStyle.scss'

export default function TextImage({ heading, description, image, imageFirst = false, altText }) {
    return (
        <section className={`textimage ${imageFirst ? 'textimage--reverse' : ''}`}>
            <img className='textimage__image' src={image} alt={altText} />
            <div className="textimage__content">
                <h2 className='textimage__heading heading-1'>{heading}</h2>
                <p className='textimage__description'>{description}</p>
            </div>
        </section>
    );
}
