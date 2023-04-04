import './globals.css'

export const metadata = {
  title: 'IMDB Clone',
  description: 'IMDB Clone for the learning purpose'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
