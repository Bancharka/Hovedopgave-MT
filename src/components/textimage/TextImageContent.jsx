import TextImageLinks from './TextImageLinks';

export default function TextImageContent({
    category,
    heading,
    description,
    contentsubheader,
    paragraph1,
    paragraph_bold1,
    paragraph2,
    paragraph_bold2,
    listItems = [],
    links = []
}) {
    return (
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
            {links.length > 0 && <TextImageLinks links={links} />}
            {paragraph2 && <p className="textimage__paragraph2">{paragraph2}</p>}
        </div>
    );
}
