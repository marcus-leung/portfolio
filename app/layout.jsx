import './globals.css'

export const metadata = {
  title: 'Marcus Leung',
  alternates: {
    canonical: 'https://marcusleung.net',
  },
  icons: {
    icon: '/pfp.jpg',
  },
  openGraph: {
    title: 'Marcus Leung',
    url: 'https://marcusleung.net',
    siteName: 'Marcus Leung',
    images: [{ url: 'https://marcusleung.net/pfp.jpg', alt: 'Marcus Leung' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marcus Leung',
    images: ['https://marcusleung.net/pfp.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
