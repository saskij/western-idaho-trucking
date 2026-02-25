'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero__bg">
                <img src="/western-idaho-trucking/images/hero-bg.png" alt="Semi truck driving through Idaho highway at sunset" />
            </div>
            <div className="hero__overlay"></div>
            <div className="container hero__content">
                <motion.div
                    className="hero__text-block"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <span className="hero__tagline">Western Idaho Trucking LLC</span>
                    <h1 className="hero__title">Delivering Excellence in <span className="text-accent">Freight & Logistics</span></h1>
                    <p className="hero__description">
                        Reliable Interstate & Temperature-Controlled Transportation Across the Northwest.
                    </p>
                    <p className="hero__sub-description">
                        Professional drivers. Modern fleet. On-time delivery. Every mile.
                    </p>
                    <div className="hero__btns">
                        <Link href="/coming-soon" className="btn btn--primary btn--large">Get a Freight Quote</Link>
                        <Link href="/coming-soon" className="btn btn--outline btn--large">Explore Our Services</Link>
                    </div>
                </motion.div>
            </div>
            <div className="hero__scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    )
}
