import TextImageContent from './TextImageContent';
import './TextImage.scss';

export default function TextImage({
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
    image,
    imageFirst = false,
    altText = ''
}) {
    return (
        <section id={id} className={`textimage ${imageFirst ? 'textimage--reverse' : ''}`}>
            {image && <img className='textimage__image' src={image} alt={altText} />}
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

