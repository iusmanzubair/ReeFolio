import { ChevronDown, ChevronUp, GripHorizontal, MousePointer2 } from "lucide-react"
import { MaxWidthWrapper } from "./MaxWidthWrapper"
import { useEffect, useState } from "react"
import { cn } from "../utils/utils";
import { UploadResume } from "./UploadResume";
import { axiosInstance } from "../utils/axios-instance";
import { toast } from "sonner";
import { Link } from "react-router";
import type { Session } from "@supabase/supabase-js";

interface themeType {
  id: number;
  name: string;
  description: string;
  preview_image_url: string;
  live_url: string;
}

export const ChooseTemplate = ({ session } : { session: Session | null }) => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string>("");
  const [isLoadingThemes, setIsLoadingThemes] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [themes, setThemes] = useState<themeType[] | []>([]);

  useEffect(() => {
    fetchThemes();
  }, []);

  const fetchThemes = async () => {
    setIsLoadingThemes(true);
    setError(null);

    try {
      const response = await axiosInstance.get("/api/fetch-themes");

      if (response.status === 200) {
        console.log(response.data);
        const { data } = response.data;
        setThemes(data);
      }
      else {
        setError("Failed to fetch themes");
        toast.error("Failed to load themes");
      }
    } catch (error) {
      console.log(error);
      setError("Something went wrong");
      toast.error("Failed to load themes");
    } finally {
      setIsLoadingThemes(false);
    }
  }

  const handleCreateProtfolio = async (customBodyResume: any) => {
    console.log(customBodyResume);
    if (selectedTheme) {
      setIsCreating(true);

      try {
        const themeName = themes.find((theme) => theme.name === selectedTheme)?.name;
        console.log("Theme Name: ", themeName);

        if (!themeName) {
          toast.error("Invalid template");
          return;
        }

        const result = await axiosInstance.post("/api/create-portfolio", { userId: session ? session.user.id : "guest", templateName: themeName, customBodyResume });
        console.log(result.data);
        if (result.status === 200) {
          const { data } = result.data;
          const url = `/p/${data.id}`;

          if(!session) {
            const guestIds = JSON.parse(sessionStorage.getItem("guestPortfolioIds") || '[]');
            guestIds.push(data.user_id);
            sessionStorage.setItem("guestPortfolioIds", JSON.stringify(guestIds));
          }

          window.open(url, '_blank');
        }
        else {
          toast.error("Failed to create portfolio");
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred");
      } finally {
        setIsCreating(false);
        setIsOpen(false);
      }
    }

  }

  const toggleExpand = (id: number) => {
    setExpandedCards(prev =>
      prev.includes(id)
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    )
  }

  return <MaxWidthWrapper className="flex flex-col items-center mb-12">
    <div className="w-[60%] space-y-4 my-14">
      <h1 className="text-5xl tracking-tight font-bold text-center">Select Your <span className="gradient-text">Portfolio</span> Theme</h1>
      <p className="text-xl font-light text-secondary text-center">Choose a theme that reflects your unique style and professional identity. Each template is fully customizable to suit your needs.</p>
    </div>

    <div className="grid grid-cols-2 gap-16 items-start">
      {themes.map((theme) => {
        const isExpanded = expandedCards.includes(theme.id);

        return (
          <div key={theme.id} className="bg-cardGray w-[32rem] pb-6 rounded-xl border-[1px] border-neutral-700/50">
            <img src={theme.preview_image_url.split(',')[0].toString().substring(1)} alt="template" className="rounded-t-2xl h-60 w-full object-cover" />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">{theme.name}</h3>
              <p className={cn("text-lg font-light text-secondary", { "line-clamp-2": !isExpanded })}>{theme.description}</p>
            </div>

            <div className="px-6 flex gap-4">
              {theme.name === "MonoEdge" ? 
                <span className="flex items-center justify-center gap-2 w-full bg-bgSecondary py-2.5 px-4 rounded-lg pl-4 cursor-pointer"><GripHorizontal className="w-4 h-4" />Preview</span>
               : <Link to={`/${theme.name.toLowerCase()}`} className="flex items-center justify-center gap-2 w-full bg-bgSecondary py-2.5 px-4 rounded-lg pl-4 cursor-pointer"><GripHorizontal className="w-4 h-4" />Preview</Link>}
              <button disabled={theme.name === "MonoEdge"} className="flex items-center justify-center gap-2 w-full primary-btn py-2.5 px-4 rounded-lg" onClick={() => {
                setIsOpen(true)
                setSelectedTheme(theme.name)
              }}><MousePointer2 className="w-4 h-4" /> Select</button>
            </div>

            <button className="mt-6 w-full flex items-center justify-center gap-1.5 text-sm text-primary cursor-pointer" onClick={() => toggleExpand(theme.id)}>Show {!isExpanded ? "More" : "Less"} {!isExpanded ? <ChevronDown className="w-5 h-5" strokeWidth={1.4} /> : <ChevronUp className="w-5 h-5" strokeWidth={1.4} />} </button>
          </div>
        )
      })}

      <UploadResume open={isOpen} onOpenChange={setIsOpen} selectedTheme={selectedTheme} handleCreatePortfolio={handleCreateProtfolio} />

    </div>

  </MaxWidthWrapper>
}
