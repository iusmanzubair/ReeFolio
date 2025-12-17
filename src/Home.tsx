import type { Session } from "@supabase/supabase-js"
import { Features } from "./Components/Features"
import { Footer } from "./Components/Footer"
import { Main } from "./Components/Main"
import { Navbar } from "./Components/Navbar"
import { Working } from "./Components/Working"

export const Home = ({ session } : { session : Session | null }) => {
  return (
    <>
      <div className="w-full bg-[url('/header-bg.jpg')] bg-cover bg-center">
        <Navbar session={session}/>
        <Main />
      </div>

      <Features />

      <div className="bg-[url(../public/features-bg.jpg)] bg-center">
        <Working />
      </div>

      <Footer />
    </>
  )
}

