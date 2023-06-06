import '../globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
import AdminMenu from '@/components/admin/adminNavbar'

export const metadata = {
  title: 'STORE',
  description: ' Admin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AdminMenu/>
        {children}
      </body>
    </html>
  )
}
