import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Next.js',
}

export default function Page() {
  return (
    <div>
      <h1>Benvenuto</h1>
      <p>blabla bla</p>
      <Link href="/dashboard">Clicca qua per la dashboard</Link>
    </div>
  );
}