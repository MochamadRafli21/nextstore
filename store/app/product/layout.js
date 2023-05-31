import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Navbar from '@/components/navbar'

export const metadata = {
  title: 'STORE| Product',
  description: 'Your Place to spend',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
