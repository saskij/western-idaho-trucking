'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="header">
            <div className="container header__content">
                <Link href="/" className="logo">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 17H3.5V6C3.5 5.44772 3.94772 5 4.5 5H15.5M2.5 17C2.5 18.1046 3.39543 19 4.5 19C5.60457 19 6.5 18.1046 6.5 17M2.5 17H1.5V14H2.5M6.5 17H14.5M6.5 17C6.5 18.1046 7.39543 19 8.5 19C9.60457 19 10.5 18.1046 10.5 17M10.5 17H12.5M15.5 5L19.5 9V17H18.5M15.5 5V17H16.5M16.5 17C16.5 18.1046 17.3954 19 18.5 19C19.6046 19 20.5 18.1046 20.5 17M20.5 17H21.5V14H20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="logo__text">
                        <span className="logo__title">Western Idaho</span>
                        <span className="logo__subtitle">Trucking LLC</span>
                    </div>
                </Link>

                <nav className={`nav ${navOpen ? 'nav--open' : ''}`} id="nav">
                    <ul className="nav__list">
                        <li><Link href="/" className="nav__link active">Home</Link></li>
                        <li><Link href="/coming-soon" className="nav__link">About</Link></li>
                        <li><Link href="/coming-soon" className="nav__link">Services</Link></li>
                        <li><Link href="/coming-soon" className="nav__link">Fleet</Link></li>
                        <li><Link href="/coming-soon" className="nav__link">Safety</Link></li>
                        <li><Link href="/coming-soon" className="nav__link">Careers</Link></li>
                        <li><Link href="/coming-soon" className="nav__link">Contact</Link></li>
                    </ul>
                </nav>

                <div className="header__right">
                    <a href="tel:2082831279" className="phone-link">(208) 283-1279</a>
                    <Link href="/coming-soon" className="btn btn--primary">Request a Quote</Link>
                    <button
                        className={`nav-toggle ${navOpen ? 'nav-toggle--open' : ''}`}
                        onClick={() => setNavOpen(!navOpen)}
                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </header>
    )
}
