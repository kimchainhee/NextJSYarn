import '../globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'About | Hahalolo',
  description: 'About',
}

export default function RootLayout({ children }) {
  return <div className={inter.className}>{children}</div>
}
