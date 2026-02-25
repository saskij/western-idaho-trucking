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
                    <img
                        src="/western-idaho-trucking/images/logo.png"
                        alt="Western Idaho Trucking LLC Logo"
                        className="logo__img"
                    />
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
