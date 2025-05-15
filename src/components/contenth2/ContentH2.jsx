import './ContentH2Style.scss'


// export default function ContentH2({ category, heading, description, contentsubheader, paragraph1, paragraph_bold1, paragraph2, paragraph_bold2 }) {
//     return (
//         <>
//         <section className='contenth2'>
//             <h3 className='contenth2__category'>{category}</h3>
//             <h2 className='contenth2__heading'>{heading}</h2>
//             <p className='contenth2__description'>{description}</p>
//             <h3 className='contenth2__contentsubheader'>{contentsubheader}</h3>
//             <p className='contenth2__paragraph__bold1'>{paragraph_bold1}</p>
//             <p className='contenth2__paragraph1'>{paragraph1}</p>            
//             <p className='contenth2__paragraph__bold2'>{paragraph_bold2}</p>
//             <p className='contenth2__paragraph2'>{paragraph2}</p>
//         </section>
//         </>
//     )
// }


export default function ContentH2({
  category,
  heading,
  description,
  contentsubheader,
  paragraph1,
  paragraph_bold1,
  paragraph2,
  paragraph_bold2
}) {
  return (
    <section className="contenth2">
      {category && <h3 className="contenth2__category">{category}</h3>}
      {heading && <h2 className="contenth2__heading">{heading}</h2>}
      {description && <p className="contenth2__description">{description}</p>}
      {contentsubheader && <h3 className="contenth2__contentsubheader">{contentsubheader}</h3>}
      {paragraph_bold1 && <p className="contenth2__paragraph__bold1">{paragraph_bold1}</p>}
      {paragraph1 && <p className="contenth2__paragraph1">{paragraph1}</p>}
      {paragraph_bold2 && <p className="contenth2__paragraph__bold2">{paragraph_bold2}</p>}
      {paragraph2 && <p className="contenth2__paragraph2">{paragraph2}</p>}
    </section>
  );
}