import './ContentHeader.scss'

export default function ContentHeader({ tagline, heading, description }) {
    return (
        <>
        <section className='contentheader'>
            <p className='contentheader__tagline tagline'>{tagline}</p>
            <h1 className='contentheader__heading'>{heading}</h1>
            <p className='contentheader__description'>{description}</p>
        </section>
        </>
    )
}