import { Suspense } from "react"
import Loading from "./loading"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }

  //<Suspense fallback={<Loading/>}></Suspense>