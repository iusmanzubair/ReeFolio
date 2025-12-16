import { ArrowDown, ArrowRight, FileText } from "lucide-react"
import { MaxWidthWrapper } from "./MaxWidthWrapper"
import { Link } from "react-router"

export const Main = () => {
  return <MaxWidthWrapper className="p-12 w-full flex items-center justify-center text-center">
    <div className="flex flex-col items-center w-3/4 gap-6">
      <p className="flex items-center gap-1.5 bg-primary/15 px-4 py-2.5 text-primary rounded-full text-sm border-[1px] border-primary/20 mb-3"><FileText className="w-4 h-4" strokeWidth={1.5} /> Resume to Portfolio Converter</p>
      <h1 className="text-6xl tracking-tight font-bold text-center leading-[4.5rem]">From <span className="gradient-text">Resume</span> to Stunning Portfolio in Seconds</h1>
      <p className="text-2xl font-light text-secondary w-[80%]">Just upload your resume and get an instant professional portfolio website. Customize it or build from scratch - no coding required.</p>

      <div className="space-x-4 my-4">
        <Link to="/choose-template" className="primary-btn inline-flex items-center gap-2 py-4 px-6 rounded-2xl">Build My Portfolio<ArrowRight strokeWidth={1.5} className="w-5 h-5" /></Link>
        <button className="cursor-pointer border-[0.1px] bg-bgBlack/20 border-neutral-700 hover:border-primary transition-all duration-500 py-4 px-6 rounded-2xl">Learn More</button>
      </div>

      <p className="flex flex-col items-center gap-3 text-sm mt-3">Scroll to explore <ArrowDown className="animate-bounce" strokeWidth={1.5} /></p>
    </div>
  </MaxWidthWrapper>
}
