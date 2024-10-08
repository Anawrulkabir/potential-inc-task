import localFont from 'next/font/local'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'], // Optional, can be ['latin-ext'] if needed
  weight: ['400', '600', '700'], // Define the weights you want to use
  display: 'swap', // Optional, better for performance
})

export const metadata = {
  title: 'Mumair',
  description: 'Muhammad Umair | UI UX designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.className} antialiased`}>{children}</body>
    </html>
  )
}
