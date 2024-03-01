import Link from 'next/link'
import { redirect } from 'next/navigation'

export default function Page() {
    return (
        <div>
          <h1>Questa è la dashboard page</h1>
          <p>CIAO</p>
          <Link href="/.">Clicca qua per ritornare alla home page</Link>
        </div>        
    )
  }

  async function fetchTeam(id: string) {
    const res = await fetch('https://...')
    if (!res.ok) return undefined
    return res.json()
  }
   
  export async function Profile({ params }: { params: { id: string } }) {
    const team = await fetchTeam(params.id)
    if (!team) {
      redirect('/login')
    }
   
    // ...
  }