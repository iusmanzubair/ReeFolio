import { useParams } from "react-router"
import { axiosInstance } from "../utils/axios-instance";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { NeoSparkHome } from "./NeoSpark/Home";
import type { Config } from "./NeoSpark/types/portfolio";

export const UserPortfolio = () => {
  const { pid } = useParams();
	const [portfolio, setPortfolio] = useState<Config | null>(null);

	useEffect(() => {
		fetchPortfolioById();
	}, []);

  const fetchPortfolioById = async () => {
    try {
			const result = await axiosInstance.get(`/api/fetch-portfolio?pid=${pid}`);
			
			if(result.status === 200) {
				const data = JSON.parse(result.data.data);
				console.log(data);
				setPortfolio(data);
			}
			else {
				toast.error("Error creating portfolio");
			}
    } catch (error) {
      console.log(error);
			toast.error("Error creating portfolio");
    }
  }

	if(!portfolio) return;

  return <NeoSparkHome portfolioConfig={portfolio}/> 
}