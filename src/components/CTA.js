'use client'
import Reveal from './Reveal'
import Link from 'next/link'

export default function CTA() {
    return (
        <section className="cta bg-dark text-white">
            <div className="container">
                <Reveal className="cta__content text-center">
                    <h2 className="cta__title">Ready to Move Your Freight?</h2>
                    <p className="cta__text">Get a competitive quote today and experience the Western Idaho Trucking difference.</p>
                    <div className="cta__btns">
                        <Link href="/coming-soon" className="btn btn--primary btn--large">Request a Quote</Link>
                        <a href="tel:2082831279" className="btn btn--outline btn--large">Call Us Now</a>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
