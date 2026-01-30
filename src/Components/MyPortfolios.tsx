import { useEffect, useState } from "react";
import type { Session } from "@supabase/supabase-js";
import { axiosInstance } from "../utils/axios-instance";
import { toast } from "sonner";
import { ChevronDown, ChevronUp, GripHorizontal } from "lucide-react";
import { cn } from "../utils/utils";
import { MaxWidthWrapper } from "./MaxWidthWrapper";
import { Link } from "react-router";
import LoadingSpinner from "./LoadingSpinner";

export const MyPortfolios = ({ session } : { session: Session }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [portfolios, setPortfolios] = useState<any>([]);
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchUserPortfolios();
  }, []);

  const fetchUserPortfolios = async () => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance.get('/api/fetch-portfolios-by-userid', {
        headers: { 'Authorization': `Bearer ${session.access_token}`, }
      }); 

      setPortfolios(data.portfolios);
      console.log(data.portfolios);
    } catch (error) {
      console.log(error);
      toast.error("Error fetching portfolios"); 
    } finally {
      setIsLoading(false);
    }
  }

  const toggleExpand = (id: number) => {
    setExpandedCards(prev =>
      prev.includes(id)
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    )
  }
  
  if(isLoading) return <LoadingSpinner />

  return <MaxWidthWrapper className="flex flex-col items-center mb-12"> 
    <div className="w-[60%] space-y-4 my-14">
      <h1 className="text-5xl tracking-tight font-bold text-center">Your <span className="gradient-text">Portfolios</span></h1>
      <p className="text-xl font-light text-secondary text-center">Explore your portfolios and keep your work beautifully organized.</p>
    </div>

    <div className="grid grid-cols-2 gap-16 items-start">
      {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      portfolios.map((portfolio: any) => {
        
        const isExpanded = expandedCards.includes(portfolio.id);

        return <div key={portfolio.id} className="bg-cardGray w-[32rem] pb-6 rounded-xl border-[1px] border-neutral-700/50">
          <img src={portfolio.template.preview_image_url.split(',')[0].toString().substring(1)} alt="template" className="rounded-t-2xl" />
          <div className="p-6 space-y-2">
            <h3 className="text-2xl font-semibold">Usman Zubair</h3>
            <p className="text-lg font-light text-secondary italic">{portfolio.template.name}</p>
            <p className={cn("text-lg font-light text-secondary", { "line-clamp-2": !isExpanded })}>{portfolio.template.description}</p>
          </div>

          <div className="px-6">
              <Link to={`/p/${portfolio.id}`}><button className="flex items-center justify-center gap-2 w-full bg-bgSecondary py-2.5 px-4 rounded-lg cursor-pointer"><GripHorizontal className="w-4 h-4" />View Portfolio</button></Link>
          </div>

          <button className="mt-6 w-full flex items-center justify-center gap-1.5 text-sm text-primary cursor-pointer" onClick={() => toggleExpand(portfolio.id)}>Show {!isExpanded ? "More" : "Less"} {!isExpanded ? <ChevronDown className="w-5 h-5" strokeWidth={1.4} /> : <ChevronUp className="w-5 h-5" strokeWidth={1.4} />} </button>
        </div>
      })} 
    </div>
  </MaxWidthWrapper>
}