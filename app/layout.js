import './globals.css'

export const metadata = {
  title: 'Fuoco — Wood-Fired Neapolitan Pizza',
  description: 'Neapolitan pizza, wood-fired on the street. Simple ingredients, proper technique.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
