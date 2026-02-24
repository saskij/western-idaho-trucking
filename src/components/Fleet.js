'use client'
import Reveal from './Reveal'

export default function Fleet() {
    const stats = [
        { label: "Modern Trucks", value: "17+" },
        { label: "Dry Van Trailers", value: "24+" },
        { label: "Reefer Units", value: "15+" },
        { label: "Interstate States", value: "48" }
    ]

    return (
        <section className="fleet section bg-dark text-white">
            <div className="container fleet__grid">
                <Reveal className="fleet__image-block">
                    <img src="/images/fleet-lineup.png" alt="Western Idaho Trucking Fleet" className="fleet__img" />
                </Reveal>
                <div className="fleet__content">
                    <Reveal>
                        <h2 className="section__title">Modern Fleet & <span className="text-accent">Advanced Capabilities</span></h2>
                        <p className="fleet__text">
                            We invest in state-of-the-art equipment to ensure the highest level of reliability and safety. All our vehicles are equipped with real-time GPS tracking and cellular connectivity.
                        </p>
                    </Reveal>
                    <div className="fleet__stats">
                        {stats.map((stat, index) => (
                            <Reveal key={index} className="stat-card">
                                <span className="stat-card__value">{stat.value}</span>
                                <span className="stat-card__label">{stat.label}</span>
                            </Reveal>
                        ))}
                    </div>
                    <Reveal>
                        <a href="/coming-soon" className="btn btn--outline">View Fleet Details</a>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
