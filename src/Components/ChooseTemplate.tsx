import { ChevronDown, ChevronUp, GripHorizontal, MousePointer2 } from "lucide-react"
import { MaxWidthWrapper } from "./MaxWidthWrapper"
import { useState } from "react"
import { cn } from "../utils/utils";
import { templates } from "../utils/templates";
import { UploadResume } from "./UploadResume";

export const ChooseTemplate = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>("");

  const handleCreateProtfolio = (customBodyResume: any) => {
    console.log(customBodyResume);
  }

  const toggleExpand = (id: number) => {
    setExpandedCards(prev =>
      prev.includes(id)
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    )
  }

  return <MaxWidthWrapper className="flex flex-col items-center justify-center">
    <div className="w-[60%] space-y-4 my-14">
      <h1 className="text-5xl tracking-tight font-bold text-center">Select Your <span className="gradient-text">Portfolio</span> Theme</h1>
      <p className="text-xl font-light text-secondary text-center">Choose a theme that reflects your unique style and professional identity. Each template is fully customizable to suit your needs.</p>
    </div>

    <div className="flex justify-evenly items-start w-full px-12">
      {templates.map((template) => {
        const isExpanded = expandedCards.includes(template.id);

        return (
          <div key={template.id} className="bg-cardGray w-[32rem] py-6 rounded-xl border-[1px] border-neutral-700/50">
            <div className="h-[15rem]">
              <img src={template.image} alt="template" />
            </div>
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">{template.title}</h3>
              <p className={cn("text-lg font-light text-secondary", { "line-clamp-2": !isExpanded })}>{template.text}</p>
            </div>

            <div className="px-6 flex gap-4">
              <button onClick={() => window.open(`http://lumenflow.${import.meta.env.VITE_LIVEURL}`)} className="flex items-center justify-center gap-2 w-full bg-bgSecondary py-2.5 px-4 rounded-xl pl-4 cursor-pointer"><GripHorizontal className="w-4 h-4" />Preview</button>
              <button className="flex items-center justify-center gap-2 w-full primary-btn py-2.5 px-4 rounded-xl" onClick={() => {
                setIsOpen(true)
                setSelectedTheme(template.title)
              }}><MousePointer2 className="w-4 h-4" /> Select</button>
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-1.5 text-sm text-primary cursor-pointer" onClick={() => toggleExpand(template.id)}>Show {!isExpanded ? "More" : "Less"} {!isExpanded ? <ChevronDown className="w-5 h-5" strokeWidth={1.4} /> : <ChevronUp className="w-5 h-5" strokeWidth={1.4} />} </button>
          </div>
        )
      })}

      <UploadResume open={isOpen} onOpenChange={setIsOpen} selectedTheme={selectedTheme} handleCreatePortfolio={handleCreateProtfolio} />

    </div>

  </MaxWidthWrapper>
}
