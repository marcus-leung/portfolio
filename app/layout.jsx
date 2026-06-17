import './globals.css'

export const metadata = {
  title: 'Marcus Leung',
  description: 'Portfolio of Marcus Leung — Software Engineer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
