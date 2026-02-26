'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className="hero">
            <motion.div
                className="hero__bg"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <img src="/western-idaho-trucking/images/hero-bg1.jpg" alt="Premium Western Idaho Trucking semi-truck on scenic highway" />
            </motion.div>
            <div className="hero__overlay"></div>
            <div className="container hero__content">
                <motion.div
                    className="hero__text-block"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2,
                                delayChildren: 0.3
                            }
                        }
                    }}
                >
                    <motion.span
                        className="hero__tagline"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } }}
                    >Western Idaho Trucking LLC</motion.span>
                    <motion.h1
                        className="hero__title"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
                    >Delivering Excellence in <span className="text-accent">Freight & Logistics</span></motion.h1>
                    <motion.p
                        className="hero__description"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                    >
                        Reliable Interstate & Temperature-Controlled Transportation Across the Northwest.
                    </motion.p>
                    <motion.p
                        className="hero__sub-description"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } }}
                    >
                        Professional drivers. Modern fleet. On-time delivery. Every mile.
                    </motion.p>
                    <motion.div
                        className="hero__btns"
                        variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } } }}
                    >
                        <Link href="/coming-soon" className="btn btn--primary btn--large">Get a Freight Quote</Link>
                        <Link href="/coming-soon" className="btn btn--outline btn--large">Explore Our Services</Link>
                        <Link href="/coming-soon" className="btn btn--accent btn--large">Join Our Team</Link>
                    </motion.div>
                </motion.div>
            </div>
            <motion.div
                className="hero__scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </motion.div>
        </section>
    )
}
