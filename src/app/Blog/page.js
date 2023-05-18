import Link from 'next/link'

export const metadata = {
  title: 'Blog | Hahalolo',
  description: 'Blog',
}

export default function Blog() {
  return (
    <main className="min-h-screen p-16">
      <div>
        <Link href="/">{'<'} Blog</Link>
      </div>
      <br />
      <div style={{ textAlign: 'center' }}>
        <b>Blog page</b>
      </div>
    </main>
  )
}
