'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default async function Page() {
  const router = useRouter()
  const data = await getData()

  return (
    <main>
      <div>
        <h1>Benvenuto</h1>
        <p>blabla bla</p>
        <Link href="/dashboard">Clicca qua per la dashboard</Link>
        <p></p>
        <button type="button"  onClick={() => router.push('/dashboard')}>clicca per dashboard</button>
      </div>
    </main>
  );
}

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', { next: { revalidate: 3600 } })
  if (!res.ok) {
    throw new Error('Errore. Dati non presi.')
  }
 
  return res.json()
}