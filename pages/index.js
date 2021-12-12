import { getSession } from "next-auth/react"
import Center from "../components/Center"
import Sidebar from "../components/Sidebar"

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div>{/* Player */}</div>
    </div>
  )
}

export const getServerSideProps = async (ctx) => {

  const session = await getSession(ctx)
  return {
    props:{
      session
    }
  }
}
