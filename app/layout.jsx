import './globals.css'

export const metadata = {
  title: 'Prabal Sharma | Business Analytics Portfolio',
  description: 'MBA Business Analytics | Data Analyst Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
