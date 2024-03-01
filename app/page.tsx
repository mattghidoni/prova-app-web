'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div>
      <h1>Benvenuto</h1>
      <p>blabla bla</p>
      <Link href="/dashboard">Clicca qua per la dashboard</Link>
      <p></p>
      <button type="button"  onClick={() => router.push('/dashboard')}>clicca per dashboard</button>
    </div>
  );
}