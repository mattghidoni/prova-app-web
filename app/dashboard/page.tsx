import Link from 'next/link'
import { redirect } from 'next/navigation'
import Image from 'next/image'

export default function Page() {
  return (
      <div>
        <h1 className="text-3xl font-bold underline">Questa è la dashboard page</h1>
        <p>CIAO</p>
        <Link href="/.">Clicca qua per ritornare alla home page</Link>
      </div>
      /*
      <Image
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        alt="bandiera"
        width={500}
        height={500}
      />
      */
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
}