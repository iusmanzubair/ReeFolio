import type { Session } from "@supabase/supabase-js"
import { FileCode2 } from "lucide-react"
import { Link } from "react-router"
import { supabase } from "../utils/supabaseClient"

export const Navbar = ({ session } : { session : Session | null }) => {
  return <nav className="w-full max-w-7xl mx-auto py-8 flex items-center justify-between">
    <Link to="/" className="flex items-center gap-1 cursor-pointer">
      <FileCode2 className="w-8 h-8 text-primary" />
      <h2 className="text-3xl font-bold gradient-text">ReeFolio</h2>
    </Link>

    <ul className="flex items-center gap-4">
      <li><Link to="#features" className="hover:text-primary text-lg">Features</Link></li>
      <li><Link to="/choose-template" className="hover:text-primary text-lg">Templates</Link></li>
      <li><Link to="/my-portfolios" className="hover:text-primary text-lg">My Portfolios</Link></li>
    </ul>

    { session
      ? <button onClick={() => supabase.auth.signOut()} className="cursor-pointer border-[0.1px] bg-bgBlack/20 border-neutral-700 hover:border-primary transition-all duration-500 py-1.5 px-5 rounded-md">Signout</button>
      : <div className="space-x-8">
        <Link to="/login" className="cursor-pointer">Log In</Link>
        <Link to="/signup" className="primary-btn py-1.5 px-5 rounded-md">Sign Up</Link>
      </div>
    }
  </nav>
}
