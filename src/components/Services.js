'use client'
import Reveal from './Reveal'
import { Monitor, ShieldCheck, Snowflake, Globe } from 'lucide-react'

export default function Services() {
    const services = [
        {
            title: 'Interstate Freight Transportation',
            desc: 'Moving goods across state lines with efficiency and reliability.',
            icon: <Monitor size={48} />
        },
        {
            title: 'General Dry Van Shipping',
            desc: 'Safe and secure transportation for a wide variety of non-perishable goods.',
            icon: <ShieldCheck size={48} />
        },
        {
            title: 'Refrigerated (Reefer) Logistics',
            desc: 'Precise temperature-controlled shipping for perishable and sensitive items.',
            icon: <Snowflake size={48} />
        },
        {
            title: 'Short & Long Haul Nationwide Routes',
            desc: 'Flexible routing options to meet your specific delivery timelines.',
            icon: <Globe size={48} />
        }
    ]

    return (
        <section className="services section bg-light">
            <div className="container">
                <Reveal className="section__header">
                    <h2 className="section__title text-center">Comprehensive Logistics Solutions</h2>
                </Reveal>
                <div className="services__grid">
                    {services.map((service, index) => (
                        <Reveal key={index} className="service-card">
                            <div className="service-card__icon">
                                {service.icon}
                            </div>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__description">{service.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
