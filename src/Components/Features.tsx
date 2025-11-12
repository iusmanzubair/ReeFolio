import { features } from "../utils/features"
import { MaxWidthWrapper } from "./MaxWidthWrapper"

export const Features = () => {
  return <MaxWidthWrapper className="py-24 flex flex-col items-center justify-center gap-4">
    <h2 className="text-4xl tracking-tight font-semibold">Everthing You Need To <span className="gradient-text">Stand Out</span></h2>
    <p className="text-xl text-secondary">Powerful tools designed to showcase your work in the best possible light</p>

    <div className="grid grid-cols-3 gap-8 my-10">
      {features.map((feature) => (
        <div key={feature.id} className="space-y-2 p-9 px-8 border-[1px] border-neutral-700/50 rounded-xl bg-cardGray">
          <p className="mb-4 bg-gradient-to-br from-primary to-primary/40 p-3.5 w-fit rounded-xl"><feature.icon /></p>
          <h4 className="text-xl font-semibold">{feature.title}</h4>
          <p className="text-secondary max-w-[18rem]">{feature.text}</p>
        </div>
      ))}
    </div>
  </MaxWidthWrapper>
}
