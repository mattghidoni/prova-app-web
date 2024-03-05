'use client'
export default function Error({error, reset,}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>C'è un errore!</h2>
      <button onClick={() => reset()}>riprova</button>
    </div>
  )
}