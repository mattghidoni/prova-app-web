export default function Template({ children }: { children: React.ReactNode }) {
  return(
    <div>
      <h1>Questo è un elemento comune (template).</h1>
      {children}
    </div>
  )
}