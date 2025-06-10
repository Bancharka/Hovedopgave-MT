export default function TextImageLinks({ links }) {
    if (!links || links.length === 0) return null;

    return (
        <div className="textimage__links">
            {links.map((link, i) => (
                <a
                    key={i}
                    href={link.href}
                    className="textimage__link"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.text}
                </a>
            ))}
        </div>
    );
}