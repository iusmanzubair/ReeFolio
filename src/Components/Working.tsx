import { working } from "../utils/working"
import { MaxWidthWrapper } from "./MaxWidthWrapper"

export const Working = () => {
  return <MaxWidthWrapper className="py-24 flex flex-col items-center gap-16">
    <div className="text-center space-y-4">
      <h2 className="text-4xl tracking-tight font-semibold">How It <span className="gradient-text">Works</span></h2>
      <p className="text-secondary text-xl">Get your professional website in just 3 simple steps</p>
    </div>
    <div className="flex items-center justify-center">
      {working.map((step, index) => (
        <div className="w-[30%] flex items-center justify-center" key={step.id}>
          <div key={step.id} className="w-[70%] flex flex-col items-center justify-center gap-3">
            <p className="bg-primary/35 p-5 rounded-full"><step.icon className="text-primary w-10 h-10" /></p>
            <h4 className="text-xl font-semibold">{step.title}</h4>
            <p className="text-secondary/80 text-center">{step.text}</p>
          </div>
          {index != working.length - 1 && <step.next className="text-primary w-10 h-10" strokeWidth={1.5} />}
        </div>
      ))}
    </div>
  </MaxWidthWrapper>
}
