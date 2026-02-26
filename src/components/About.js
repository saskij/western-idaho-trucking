'use client'
import Reveal from './Reveal'

export default function About() {
    return (
        <section className="about section">
            <div className="container about__grid">
                <Reveal className="about__content">
                    <h2 className="section__title">A Trusted Regional Freight Partner <span className="text-accent">Since 2011</span></h2>
                    <p className="about__text">
                        Western Idaho Trucking LLC is a family-owned freight carrier serving Idaho and interstate routes across the Northwest.
                    </p>
                    <p className="about__text">
                        We specialize in general freight, refrigerated transport, and long-haul logistics solutions for commercial clients.
                    </p>
                    <p className="about__text">
                        Our modern fleet and experienced drivers ensure safe, compliant, and on-time delivery for every shipment.
                    </p>
                    <a href="/coming-soon" className="btn btn--primary">Learn More About Us</a>
                </Reveal>
                <Reveal className="about__image-block">
                    <img src="/western-idaho-trucking/images/about-fleet.png" alt="Western Idaho Trucking Fleet Yard" className="about__img" />
                </Reveal>
            </div>
        </section>
    )
}
