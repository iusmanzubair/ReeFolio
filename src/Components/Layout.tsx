import { Outlet } from "react-router"
import { Navbar } from "./Navbar"
import type { Session } from "@supabase/supabase-js"

export const Layout = ({ session } : { session: Session | null }) => {
  return <>
    <Navbar session={session}/>
    <Outlet />
  </>
}
