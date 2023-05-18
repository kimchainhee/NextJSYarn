import Link from 'next/link'

export const metadata = {
  title: 'About | Hahalolo',
  description: 'About',
}

export default function About() {
  return (
    <main className="min-h-screen p-8">
      <div>
        <Link href="/">{'<'} About</Link>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <b>About page</b>
      </div>
    </main>
  )
}
