import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog | Hahalolo',
  description: 'Blog',
}

export default function RootLayout({ children }) {
  return <div>{children}</div>
}
