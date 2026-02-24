'use client'
import Reveal from './Reveal'

export default function TrustStrip() {
    const items = [
        "14+ Years in Business",
        "Interstate Operations",
        "USDOT 2107163 / MC 734857",
        "17+ Trucks & Professional Drivers",
        "98% On-Time Delivery Rate"
    ]

    return (
        <section className="trust-strip">
            <div className="container trust-strip__content">
                {items.map((item, index) => (
                    <Reveal key={index} className="trust-item">
                        <span className="trust-item__icon">✔</span>
                        <span className="trust-item__text">{item}</span>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}
