import { Link, useLocation } from "react-router-dom";
import "./PageNav.scss";

export default function PageNav() {
    const location = useLocation();
    const currentPath = location.pathname;

    const pageOrder = [
        { path: '/', label: 'Forside' },
        { path: '/Practical', label: 'Praktisk info' },
        { path: '/Culture', label: 'Kultur' },
        { path: '/Team', label: 'Teamet' },
        { path: '/Testimonials', label: 'Tidligere praktikanter'
         }
    ];

    const currentIndex = pageOrder.findIndex(page => page.path === currentPath);
    const prevPage = pageOrder[currentIndex - 1];
    const nextPage = pageOrder[currentIndex + 1];

    return (
        <div className="page-nav">
            {prevPage && (
                <Link to={prevPage.path} className="page-nav__prev">
                     <img src="/img/icons/arrow-left.svg" alt="Arrow left" /> {prevPage.label || 'Forside'} 
                </Link>
            )}
            {nextPage && nextPage.label && (
                <Link to={nextPage.path} className="page-nav__next">
                    {nextPage.label} <img src="/img/icons/arrow-right.svg" alt="Arrow right" />
                </Link>
            )}
        </div>
    );
}