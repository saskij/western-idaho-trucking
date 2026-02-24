import './globals.css'

export const metadata = {
  title: 'Western Idaho Trucking LLC | Premium Freight & Logistics',
  description: 'Reliable Interstate & Temperature-Controlled Transportation Across the Northwest. Professional drivers, modern fleet, on-time delivery.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
