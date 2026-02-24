'use client'
import Reveal from './Reveal'

export default function Safety() {
    const points = [
        { title: "DOT Compliant", desc: "Full adherence to Federal Motor Carrier Safety Regulations (FMCSR)." },
        { title: "Real-time Monitoring", desc: "Dash cams and GPS tracking for driver safety and load security." },
        { title: "Regular Maintenance", desc: "Strict in-house and third-party inspection schedules." }
    ]

    return (
        <section className="safety section">
            <div className="container">
                <Reveal className="section__header text-center">
                    <h2 className="section__title">Safety & Compliance <span className="text-accent">First</span></h2>
                    <p className="section__subtitle max-w-2xl mx-auto">
                        Our commitment to safety is the foundation of our business. We maintain rigorous standards for our drivers and equipment.
                    </p>
                </Reveal>
                <div className="safety__grid">
                    {points.map((point, index) => (
                        <Reveal key={index} className="safety-card">
                            <h3 className="safety-card__title">{point.title}</h3>
                            <p className="safety-card__desc">{point.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
