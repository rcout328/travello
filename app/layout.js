import './globals.css';

export const metadata = {
  title: 'Thrillophilia',
  description: 'Book your next adventure with Thrillophilia',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
