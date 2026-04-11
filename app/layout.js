import './globals.css'

export const metadata = {
  title: 'Fuoco — Neapolitan Pizza Truck',
  description: 'Wood-fired Neapolitan pizza on wheels. Find us around town!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
