import Link from 'next/link'

export default function ComingSoon() {
    return (
        <div className="coming-soon">
            <div className="container">
                <div className="coming-soon__content">
                    <Link href="/" className="logo logo--white mb-8">
                        <div className="logo__text">
                            <span className="logo__title">Western Idaho</span>
                            <span className="logo__subtitle">Trucking LLC</span>
                        </div>
                    </Link>
                    <h1 className="coming-soon__title">Full Website <span className="text-accent">Coming Soon</span></h1>
                    <p className="coming-soon__text"> We are currently upgrading our digital presence to better serve you. Please check back soon for our full suite of services and driver resources. </p>
                    <div className="coming-soon__contact">
                        <p><strong>Immediate Assistance:</strong> <a href="tel:2082831279">(208) 283-1279</a></p>
                    </div>
                    <Link href="/" className="btn btn--primary">Back to Home Page</Link>
                </div>
            </div>
        </div>
    )
}
