'use client'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="footer bg-dark text-white">
            <div className="container footer__grid">
                <div className="footer__col">
                    <div className="logo logo--white mb-4">
                        <img
                            src="/western-idaho-trucking/images/logo.png"
                            alt="Western Idaho Trucking LLC Logo"
                            className="logo__img"
                            style={{ filter: 'brightness(0) invert(1)', width: '180px' }}
                        />
                    </div>
                    <p className="footer__text">
                        Premium freight and logistics solutions across the Northwest and beyond. Family owned, family driven.
                    </p>
                </div>

                <div className="footer__col">
                    <h4 className="footer__title">Key Services</h4>
                    <ul className="footer__links">
                        <li><Link href="/coming-soon">Over-the-Road Freight</Link></li>
                        <li><Link href="/coming-soon">Refrigerated Logistics</Link></li>
                        <li><Link href="/coming-soon">Regional Logistics</Link></li>
                        <li><Link href="/coming-soon">Expedited Delivery</Link></li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4 className="footer__title">Contact Us</h4>
                    <ul className="footer__contact">
                        <li><strong>Office:</strong> Boise, Idaho</li>
                        <li><strong>Phone:</strong> <a href="tel:2082831279">(208) 283-1279</a></li>
                        <li><strong>Email:</strong> <a href="mailto:dispatch@westernidaho.com">dispatch@westernidaho.com</a></li>
                    </ul>
                </div>

                <div className="footer__col">
                    <h4 className="footer__title">Compliance</h4>
                    <ul className="footer__links">
                        <li>USDOT: 2107163</li>
                        <li>MC: 734857</li>
                        <li>BONDED & INSURED</li>
                    </ul>
                </div>
            </div>

            <div className="footer__bottom container">
                <p>&copy; {new Date().getFullYear()} Western Idaho Trucking LLC. All rights reserved.</p>
                <div className="footer__legal">
                    <Link href="/coming-soon">Privacy Policy</Link>
                    <Link href="/coming-soon">Terms of Service</Link>
                </div>
            </div>
        </footer>
    )
}
