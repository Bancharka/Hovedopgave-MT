import TextImageContent from "./TextImageContent";

export default function TextImage({
    image,
    altText = "",
    id,
    category,
    heading,
    description,
    contentsubheader,
    paragraph1,
    paragraph_bold1,
    paragraph2,
    paragraph_bold2,
    listItems = [],
    links = [],
    reversed = false
}) {
    return (
        <section id={id} className={`textimage ${reversed ? 'textimage--reverse' : ''}`}>
            {image && <img className="textimage__image" src={image} alt={altText} />}
            <TextImageContent
                category={category}
                heading={heading}
                description={description}
                contentsubheader={contentsubheader}
                paragraph1={paragraph1}
                paragraph_bold1={paragraph_bold1}
                paragraph2={paragraph2}
                paragraph_bold2={paragraph_bold2}
                listItems={listItems}
                links={links}
            />
        </section>
    );
}
