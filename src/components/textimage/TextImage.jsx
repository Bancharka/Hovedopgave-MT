import './TextImage.scss'

export default function TextImage({
    category,
    heading,
    description,
    listItems = [],
    links = [],
    contentsubheader,
    paragraph1,
    paragraph_bold1,
    paragraph2,
    paragraph_bold2,
    image,
    imageFirst = false,
    altText = ''
}) {
    return (
        <section className={`textimage ${imageFirst ? 'textimage--reverse' : ''}`}>
            {image && <img className='textimage__image' src={image} alt={altText} />}

            <div className="textimage__content">
                {category && <h3 className="textimage__category">{category}</h3>}
                {heading && <h2 className="textimage__heading heading-1">{heading}</h2>}
                {description && <p className="textimage__description">{description}</p>}


                {contentsubheader && <h3 className="textimage__contentsubheader">{contentsubheader}</h3>}
                {paragraph_bold1 && <p className="textimage__paragraph__bold1">{paragraph_bold1}</p>}
                {paragraph1 && <p className="textimage__paragraph1">{paragraph1}</p>}
                {paragraph_bold2 && <p className="textimage__paragraph__bold2">{paragraph_bold2}</p>}

                {listItems.length > 0 && (
                    <ul className="textimage__list">
                        {listItems.map((item, index) => (
                            <li key={index} className="textimage__list-item">{item}</li>
                        ))}
                    </ul>
                )}
                
                {links.length > 0 && (
                    <div className="textimage__links">
                        {links.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="textimage__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.text}
                            </a>
                        ))}
                    </div>
                )}

                {paragraph2 && <p className="textimage__paragraph2">{paragraph2}</p>}
            </div>
        </section>
    );
}
