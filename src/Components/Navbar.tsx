import { FileCode2 } from "lucide-react"

export const Navbar = () => {
  return <nav className="w-full max-w-7xl mx-auto py-8 flex items-center justify-between">
    <div className="flex items-center gap-1">
      <FileCode2 className="w-8 h-8 text-primary" />
      <h2 className="text-3xl font-bold gradient-text">ReeFolio</h2>
    </div>

    <ul className="flex items-center gap-4">
      <li><a href="#" className="hover:text-primary text-lg">Features</a></li>
      <li><a href="#" className="hover:text-primary text-lg">Templates</a></li>
      <li><a href="#" className="hover:text-primary text-lg">Templates</a></li>
    </ul>

    <div className="space-x-8">
      <button className="cursor-pointer">Log In</button>
      <button className="primary-btn py-1.5 px-5 rounded-md">Sign Up</button>
    </div>
  </nav>
}
